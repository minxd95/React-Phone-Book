import React from "react";

function PhoneInfo(props) {
  const style = { border: "1px solid black", padding: "8px", margin: "8px" };
  const { name, phone, id } = props.info;
  console.log(props.key);
  return (
    <div style={style}>
      <div>
        <b>
          {id} : {name}
        </b>
      </div>
      <div>{phone}</div>
    </div>
  );
}

PhoneInfo.defaultProps = {
  info: {
    name: "이름",
    phone: "010-0000-0000",
    id: 0,
  },
};

export default PhoneInfo;
