(this["webpackJsonpmekvahanreact-app"]=this["webpackJsonpmekvahanreact-app"]||[]).push([[0],{127:function(e,a,t){e.exports=t.p+"static/media/contact.55f9ddef.png"},177:function(e,a,t){e.exports=t(350)},182:function(e,a,t){},184:function(e,a,t){},275:function(e,a,t){e.exports=t.p+"static/media/logo.10408929.svg"},350:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),c=t.n(s),l=(t(182),t(43)),d=(t(183),t(184),Object(r.createContext)()),i=t(27),o=t(355),u=t(359),m=t(353),p=t(356),g=t(352),v=t(59),b=t(357),E=t(362),f=t(364),h=t(365),O=o.a.Meta,j=function(e){var a=e.address,r=e.removeAddress,s=e.editAddress;return n.a.createElement(o.a,{style:{width:300,height:200,margin:"1em"},actions:[n.a.createElement(f.a,{key:"delete",onClick:function(){return r(a)}}),n.a.createElement(h.a,{key:"edit",onClick:function(){return s(a)}})]},n.a.createElement(O,{avatar:n.a.createElement(g.a,{src:t(127)}),title:a.address.addressType,description:"".concat(a.address.addressLine1," , ").concat(a.address.addressLine2,", ").concat(a.address.city," , ").concat(a.address.zipcode)}))},y=t(118),N=t.n(y),C=t(366),S=t(367),w=t(368),k=t(72),L=o.a.Meta,I=u.a.Option,A=m.a.Sider,q=function(){var e=Object(r.useContext)(d),a=Object(r.useState)(!1),s=Object(l.a)(a,2),c=s[0],o=s[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),h=f[0],O=f[1],y=Object(r.useState)({}),q=Object(l.a)(y,2),P=q[0],x=q[1],T=Object(r.useState)({addressType:"",addressLine1:"",addressLine2:"",city:"",state:"",zipcode:"",country:""}),z=Object(l.a)(T,2),J=z[0],M=z[1],H=Object(r.useState)([]),V=Object(l.a)(H,2),B=V[0],G=V[1];Object(r.useEffect)((function(){G(function(){if(localStorage.getItem("addresses"))return JSON.parse(localStorage.getItem("addresses"))}())}),[J]);var W=function(e){o(!1),O(!1)};function D(e){M(Object(i.a)(Object(i.a)({},J),{},{addressType:e.value}))}var F=function(e){var a=[];localStorage.getItem("addresses")&&(a=JSON.parse(localStorage.getItem("addresses"))),B.map((function(t,r){e.uid===t.uid&&a.splice(r,1)})),localStorage.setItem("addresses",JSON.stringify(a)),G(a)},K=function(e){O(!0),x(e),J.addressLine1=e.address.addressLine1,J.addressLine2=e.address.addressLine2,J.addressType=e.address.addressType,J.state=e.address.state,J.zipcode=e.address.zipcode,J.city=e.address.city,J.country=e.address.country};return n.a.createElement("div",{className:"addressWrapper"},function(){if(0===e.user)return n.a.createElement(k.a,{to:"/login",noThrow:!0})}(),n.a.createElement("div",{className:"side"},n.a.createElement(A,{theme:"light",className:"sider"},n.a.createElement("div",{className:"logo"}),n.a.createElement(p.a,{theme:"light",mode:"inline",defaultSelectedKeys:["2"]},n.a.createElement(p.a.Item,{className:"myProfile"},n.a.createElement(L,{avatar:n.a.createElement(g.a,{src:t(127)})}),n.a.createElement("h3",null,"Hi Mekvahan!")),n.a.createElement(p.a.Item,{key:"1",icon:n.a.createElement(C.a,null)},"My Profile"),n.a.createElement(p.a.Item,{key:"2",icon:n.a.createElement(S.a,null)},"Manage Address"),n.a.createElement(p.a.Item,{key:"3",icon:n.a.createElement(w.a,null)},"Change Password")))),n.a.createElement("div",{className:"mainAdd"},n.a.createElement("div",{className:"top"},n.a.createElement("h4",null,"My Addresses"),n.a.createElement(v.a,{type:"danger",onClick:function(){o(!0)}},"Add Addresses"),n.a.createElement(b.a,{title:"Add Address",visible:c,onOk:function(e){o(!1);var a={address:J,uid:Object(E.a)()},t=[];localStorage.getItem("addresses")&&(t=JSON.parse(localStorage.getItem("addresses"))),t.push(Object(i.a)({},a)),localStorage.setItem("addresses",JSON.stringify(t)),G(t),M(Object(i.a)(Object(i.a)({},J),{},{addressType:"",addressLine1:"",addressLine2:"",city:"",state:"",zipcode:"",country:""}))},onCancel:W},n.a.createElement(N.a,{className:"address-inputDiv"},n.a.createElement(u.a,{labelInValue:!0,defaultValue:{value:""},style:{width:100,padding:"3px",marginBottom:"1em"},onChange:D},n.a.createElement(I,{value:"Home"},"Home"),n.a.createElement(I,{value:"Office"},"Office"),n.a.createElement(I,{value:"PG"},"PG")),n.a.createElement("input",{placeholder:"Address Line 1",className:"address-input",value:J.addressLine1,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{addressLine1:e.target.value}))}}),n.a.createElement("input",{placeholder:"Address Line 2",className:"address-input",value:J.addressLine2,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{addressLine2:e.target.value}))}}),n.a.createElement("input",{placeholder:"City",className:"address-input",value:J.city,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{city:e.target.value}))}}),n.a.createElement("input",{placeholder:"State",className:"address-input",value:J.state,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{state:e.target.value}))}}),n.a.createElement("input",{placeholder:"ZipCode",className:"address-input",value:J.zipcode,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{zipcode:e.target.value}))}}),n.a.createElement("input",{placeholder:"Country",className:"address-input",value:J.country,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{country:e.target.value}))}}))),n.a.createElement(b.a,{title:"Edit Address",visible:h,onOk:function(){O(!1);var e=[];localStorage.getItem("addresses")&&(e=JSON.parse(localStorage.getItem("addresses"))),e.map((function(a,t){P.uid===a.uid&&(P.address=J,a.address=P.address),localStorage.setItem("addresses",JSON.stringify(e)),G(e)}))},onCancel:W},n.a.createElement(N.a,{className:"address-inputDiv"},n.a.createElement(u.a,{labelInValue:!0,defaultValue:{value:""},style:{width:100,padding:"3px",marginBottom:"1em"},onChange:D},n.a.createElement(I,{value:"Home"},"Home"),n.a.createElement(I,{value:"Office"},"Office"),n.a.createElement(I,{value:"PG"},"PG")),n.a.createElement("input",{placeholder:"Address Line 1",className:"address-input",value:J.addressLine1,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{addressLine1:e.target.value}))}}),n.a.createElement("input",{placeholder:"Address Line 2",className:"address-input",value:J.addressLine2,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{addressLine2:e.target.value}))}}),n.a.createElement("input",{placeholder:"City",className:"address-input",value:J.city,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{city:e.target.value}))}}),n.a.createElement("input",{placeholder:"State",className:"address-input",value:J.state,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{state:e.target.value}))}}),n.a.createElement("input",{placeholder:"ZipCode",className:"address-input",value:J.zipcode,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{zipcode:e.target.value}))}}),n.a.createElement("input",{placeholder:"Country",className:"address-input",value:J.country,required:!0,onChange:function(e){return M(Object(i.a)(Object(i.a)({},J),{},{country:e.target.value}))}})))),n.a.createElement("div",{className:"bottom"},B?B.map((function(e,a){return n.a.createElement(j,{address:e,key:a,removeAddress:F,editAddress:K})})):n.a.createElement("div",{className:"oops"},n.a.createElement("h5",null,"Looks like you dont have any saved addresses !")))))},P=t(119),x=t.n(P),T=t(164),z=t(354),J=t(363),M=t(358),H=t(360),V=t(361),B=t(165),G=t.n(B),W={labelCol:{span:8},wrapperCol:{span:16}},D={wrapperCol:{offset:8,span:16}},F=function(){var e=Object(r.useContext)(d),a=Object(r.useState)(""),s=Object(l.a)(a,2),c=s[0],i=s[1],o=Object(r.useState)(""),u=Object(l.a)(o,2),m=u[0],p=u[1],g=Object(r.useState)(!1),b=Object(l.a)(g,2),E=b[0],f=b[1],h=Object(r.useState)(!1),O=Object(l.a)(h,2),j=O[0],y=O[1],N=function(){var a=Object(T.a)(x.a.mark((function a(){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!1),y(!0),a.next=4,G.a.post("https://mekvahan.com/api/android_intern_task",{mobile:c,password:m}).then((function(a){var t=a.data;t.status?(console.log(t.status),e.setUser(c)):f(!0)})).catch((function(e){return f(!0)}));case 4:y(!1);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return n.a.createElement("div",{className:"wrapper"},function(){if(0!==e.user)return n.a.createElement(k.a,{to:"/",noThrow:!0})}(),n.a.createElement("div",{className:"rowOne"}),n.a.createElement("div",{className:"rowTwo"},n.a.createElement("h1",{style:{color:"#ff4d4f"}},n.a.createElement("img",{src:t(275),className:"logo",alt:""}),"MEKVAHAN"),j&&n.a.createElement(z.a,{tip:"Fetching"}),E&&n.a.createElement(J.a,{message:"error",type:"error",style:{width:"20em"}}),n.a.createElement(M.a,Object.assign({className:"loginForm"},W,{name:"basic",initialValues:{remember:!0}}),n.a.createElement(M.a.Item,{label:"Mobile ",name:"mobilenumber",rules:[{required:!0,message:"Please input your username!"}]},n.a.createElement(H.a,{placeholder:"10 digit Mobile Number",onChange:function(e){return i(e.target.value)}})),n.a.createElement(M.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},n.a.createElement(H.a.Password,{placeholder:"password",onChange:function(e){return p(e.target.value)}})),n.a.createElement(M.a.Item,Object.assign({},D,{name:"remember",valuePropName:"checked"}),n.a.createElement(V.a,null,"Remember me")),n.a.createElement(M.a.Item,D,n.a.createElement(v.a,{type:"danger",htmlType:"submit",onClick:function(){N()}},"Login")))))},K=function(){var e=Object(r.useState)(0),a=Object(l.a)(e,2),t=a[0],s=a[1];return n.a.createElement(d.Provider,{value:{user:t,setUser:s}},n.a.createElement(k.b,null,n.a.createElement(q,{path:"/"}),n.a.createElement(F,{path:"/login"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[177,1,2]]]);
//# sourceMappingURL=main.d0dd7561.chunk.js.map