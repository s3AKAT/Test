import React, { useState } from "react";
import "../styles/Task2.css";

export default function Task2() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [secondName, setSecondName] = useState("");
  const [array, setArray] = useState([]);
  const massive = () => {
    setArray([
      ...array,
      { name: name, surname: surname, secondName: secondName },
    ]);
    console.log(array);
    setName("");
    setSurname("");
    setSecondName("");
  };
  const third = (e) => {
    setSecondName(e.target.value);
  };
  const second = (e) => {
    setSurname(e.target.value);
  };
  const first = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input onChange={first} value={name} type="text" placeholder="Имя" />
      <input
        onChange={second}
        value={surname}
        type="text"
        placeholder="Фамилия"
      />
      <input
        onChange={third}
        value={secondName}
        type="text"
        placeholder="Отчество"
      />
      <button onClick={massive}>Отобразить информацию</button>
      <div className="modal">
        {array.map((item, index) => (
          <div key={index}>
            <p>Имя: {item.name} </p>
            <p>Фамилия: {item.surname} </p>
            <p>Отчество: {item.secondName} </p>
          </div>
        ))}
      </div>
    </>
  );
}
