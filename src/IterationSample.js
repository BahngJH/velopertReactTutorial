import React, { useState } from "react";

const IterationSample = () => {
  //const names = ["눈사람", "얼음", "눈", "바람"];
  //const nameList = names.map(name, index => <li key={index}>{name}</li>);
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "불꽃" },
    { id: 3, text: "나무" },
    { id: 4, text: "태양" }
  ]);
  const [InputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChage = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: InputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
      {}
    </li>
  ));

  return (
    <>
      <input value={InputText} onChange={onChage} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
