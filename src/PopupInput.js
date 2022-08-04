import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import React from "react";

const popupInput = ({ title, input, falseButton, trueButton }) => {
  return (
    <>
      <div data-type="header">
        <h1>{title}</h1>
      </div>
      <Input
        data-type="input"
        autoFocus
        value={input.value}
        onChange={(event) => {
          input.setValue(event.target.value);
        }}
        placeholder={input.placeholder}
      />
      <div data-type="buttons">
        <Button onClick={falseButton.click}>{falseButton.text}</Button>
        <Button onClick={trueButton.click}>{trueButton.text}</Button>
      </div>
    </>
  );
};
export default popupInput;
