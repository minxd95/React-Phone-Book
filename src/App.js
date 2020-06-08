import React, { useState } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

function App() {
  const [info, setInfo] = useState([
    {
      id: 0,
      name: "김민준",
      phone: "010-0000-0000",
    },
    {
      id: 1,
      name: "홍길동",
      phone: "010-0000-0001",
    },
  ]);

  function handleCreate(data) {
    setInfo([...info, { id: info[info.length - 1].id + 1, ...data }]);
    // console.log(data);
  }
  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList data={info} />
    </div>
  );
}

App.defaultProps = {
  info: {
    name: "이름",
    phone: "010-0000-0000",
    id: 0,
  },
};

export default App;
