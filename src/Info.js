import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nicname, setNicname] = useState("");

  useEffect(() => {
    console.log("랜더링이 완료되었습니다");

    console.log({
      name,
      nicname
    });
  });
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNicname = e => {
    setNicname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nicname} onChange={onChangeNicname} />
      </div>
      <div>
        <b>이름 : {name}</b>
        <br />
        <b>별명 : {nicname}</b>
      </div>
    </>
  );
};

export default Info;
