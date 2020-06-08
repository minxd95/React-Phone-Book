import React from "react";
import PhoneInfo from "./PhoneInfo";

function PhoneInfoList(props) {
  const data = props.data;
  const list = data.map((info) => <PhoneInfo key={info.id} info={info} />);
  // console.log(data);
  return <div>{list}</div>;
}

PhoneInfoList.defaultProps = {
  data: [],
};

export default PhoneInfoList;
