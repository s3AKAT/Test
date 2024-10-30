import React from "react";
import { useRef } from "react";

export default function FirstHook(props) {
  const element = useRef(null);

  const changeFocus = () => {
    element.current.focus();
  };
  return (
    <>
      <input ref={element} type="text" />
      <button onClick={changeFocus}>Focus on input</button>
      <p>{props.text}</p>
    </>
  );
}
