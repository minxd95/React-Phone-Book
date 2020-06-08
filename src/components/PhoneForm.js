import React, { useState } from "react";
import styled from "styled-components";

function PhoneFrom(props) {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });

  function handleChange(e) {
    //console.log(e.target);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onCreate(data);
    setData({ name: "", phone: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="이름"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        placeholder="전화번호"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

const Input = styled.input`
  font-size: 20px;
`;

export default PhoneFrom;
