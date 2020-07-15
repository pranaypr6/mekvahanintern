import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;

const AddressCard = ({ address, removeAddress, editAddress }) => {
  return (
    <Card
      style={{ width: 300, height: 200, margin: "1em" }}
      actions={[
        <DeleteOutlined key="delete" onClick={() => removeAddress(address)} />,
        <EditOutlined key="edit" onClick={() => editAddress(address)} />,
      ]}
    >
      <Meta
        avatar={<Avatar src={require("../assets/contact.png")} />}
        title={address.address.addressType}
        description={`${address.address.addressLine1} , ${address.address.addressLine2}, ${address.address.city} , ${address.address.zipcode}`}
      />
    </Card>
  );
};

export default AddressCard;
