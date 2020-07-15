import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Select, Layout, Menu, Card, Avatar } from "antd";
import { v4 } from "uuid";
import AddressCard from "./AddressCard";
import Form from "antd/lib/form/Form";
import {
  UserOutlined,
  ContactsOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Redirect } from "@reach/router";
import UserContext from "../context/UserContext";
const { Meta } = Card;
const { Option } = Select;
const { Sider } = Layout;

const ManageAdresses = () => {
  const context = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [editvisible, setEditVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [address, setAddress] = useState({
    addressType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [addressesSaved, setAddressesSaved] = useState([]);

  //Getting
  const getAddresses = () => {
    if (localStorage.getItem("addresses")) {
      return JSON.parse(localStorage.getItem("addresses"));
    }
  };

  const isUser = () => {
    if (context.user === 0) {
      return <Redirect to="/login" noThrow />;
    }
  };

  useEffect(() => {
    setAddressesSaved(getAddresses());
  }, [address]);

  //modal
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
    const addresses = {
      address,
      uid: v4(),
    };
    let addressArray = [];
    if (localStorage.getItem("addresses")) {
      addressArray = JSON.parse(localStorage.getItem("addresses"));
    }
    addressArray.push({ ...addresses });
    localStorage.setItem("addresses", JSON.stringify(addressArray));
    setAddressesSaved(addressArray);
    setAddress({
      ...address,
      addressType: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    });
  };

  const handleCancel = (e) => {
    setVisible(false);
    setEditVisible(false);
  };

  //form options
  function handleOptionChange(value) {
    setAddress({ ...address, addressType: value.value });
  }

  // removing address
  const removeAddress = (item) => {
    let array = [];
    if (localStorage.getItem("addresses")) {
      array = JSON.parse(localStorage.getItem("addresses"));
    }
    addressesSaved.map((addr, i) => {
      if (item.uid === addr.uid) {
        array.splice(i, 1);
      }
    });
    localStorage.setItem("addresses", JSON.stringify(array));
    setAddressesSaved(array);
  };

  //Editing Address
  const editAddress = (item) => {
    setEditVisible(true);
    setCurrentItem(item);
    address.addressLine1 = item.address.addressLine1;
    address.addressLine2 = item.address.addressLine2;
    address.addressType = item.address.addressType;
    address.state = item.address.state;
    address.zipcode = item.address.zipcode;
    address.city = item.address.city;
    address.country = item.address.country;
  };

  const handleEditOk = () => {
    setEditVisible(false);
    let editAddressArray = [];
    if (localStorage.getItem("addresses")) {
      editAddressArray = JSON.parse(localStorage.getItem("addresses"));
    }
    editAddressArray.map((addrs, i) => {
      if (currentItem.uid === addrs.uid) {
        currentItem.address = address;
        addrs.address = currentItem.address;
      }
      localStorage.setItem("addresses", JSON.stringify(editAddressArray));
      setAddressesSaved(editAddressArray);
    });
  };

  return (
    <div className="addressWrapper">
      {isUser()}
      <div className="side">
        <Sider theme="light" className="sider">
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item className="myProfile">
              <Meta
                avatar={<Avatar src={require("../assets/contact.png")} />}
              />
              <h3>Hi Mekvahan!</h3>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<ContactsOutlined />}>
              Manage Address
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Change Password
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
      <div className="mainAdd">
        <div className="top">
          <h4>My Addresses</h4>
          <Button type="danger" onClick={showModal}>
            Add Addresses
          </Button>
          <Modal
            title="Add Address"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form className="address-inputDiv">
              <Select
                labelInValue
                defaultValue={{ value: "" }}
                style={{ width: 100, padding: "3px", marginBottom: "1em" }}
                onChange={handleOptionChange}
              >
                <Option value="Home">Home</Option>
                <Option value="Office">Office</Option>
                <Option value="PG">PG</Option>
              </Select>
              <input
                placeholder="Address Line 1"
                className="address-input"
                value={address.addressLine1}
                required
                onChange={(e) =>
                  setAddress({ ...address, addressLine1: e.target.value })
                }
              />
              <input
                placeholder="Address Line 2"
                className="address-input"
                value={address.addressLine2}
                required
                onChange={(e) =>
                  setAddress({ ...address, addressLine2: e.target.value })
                }
              />
              <input
                placeholder="City"
                className="address-input"
                value={address.city}
                required
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <input
                placeholder="State"
                className="address-input"
                value={address.state}
                required
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              />
              <input
                placeholder="ZipCode"
                className="address-input"
                value={address.zipcode}
                required
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
              />
              <input
                placeholder="Country"
                className="address-input"
                value={address.country}
                required
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </Form>
          </Modal>
          <Modal
            title="Edit Address"
            visible={editvisible}
            onOk={handleEditOk}
            onCancel={handleCancel}
          >
            <Form className="address-inputDiv">
              <Select
                labelInValue
                defaultValue={{ value: "" }}
                style={{ width: 100, padding: "3px", marginBottom: "1em" }}
                onChange={handleOptionChange}
              >
                <Option value="Home">Home</Option>
                <Option value="Office">Office</Option>
                <Option value="PG">PG</Option>
              </Select>
              <input
                placeholder="Address Line 1"
                className="address-input"
                value={address.addressLine1}
                required
                onChange={(e) =>
                  setAddress({ ...address, addressLine1: e.target.value })
                }
              />
              <input
                placeholder="Address Line 2"
                className="address-input"
                value={address.addressLine2}
                required
                onChange={(e) =>
                  setAddress({ ...address, addressLine2: e.target.value })
                }
              />
              <input
                placeholder="City"
                className="address-input"
                value={address.city}
                required
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <input
                placeholder="State"
                className="address-input"
                value={address.state}
                required
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              />
              <input
                placeholder="ZipCode"
                className="address-input"
                value={address.zipcode}
                required
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
              />
              <input
                placeholder="Country"
                className="address-input"
                value={address.country}
                required
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </Form>
          </Modal>
        </div>
        <div className="bottom">
          {addressesSaved ? (
            addressesSaved.map((addr, index) => {
              return (
                <AddressCard
                  address={addr}
                  key={index}
                  removeAddress={removeAddress}
                  editAddress={editAddress}
                />
              );
            })
          ) : (
            <div className="oops">
              <h5>Looks like you dont have any saved addresses !</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAdresses;
