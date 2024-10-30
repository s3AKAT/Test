import React, { useState, useMemo } from "react";

export default function SecondHook() {
  const [count, setCount] = useState(0);
  const [trashNumber, setTrashNumber] = useState(0);
  // useMemo - запоминает результат любой функции, пока значение переменной указаннной в ней не изменится
  // Можно сравнить с computed (Vue.js)

  const computedValue = useMemo(() => {
    console.log("Вычисляем...");
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Счетчик: {count}</h2>
      <h2>trashNumber: {trashNumber}</h2>
      <h2>Счетчик *2: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>
        Увеличить на 1, счетчик
      </button>
      <button onClick={() => setTrashNumber(count + 1)}>
        Увеличить на 1, trashNumber
      </button>
    </>
  );
}
