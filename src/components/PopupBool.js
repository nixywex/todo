import Button from "./UI/Button/Button";
import React from "react";

const PopupBool = ({ title, falseButton, trueButton }) => {
  return (
    <>
      <div data-type="header">
        <h1>{title}</h1>
      </div>
      <div data-type="buttons">
        <Button onClick={falseButton.click}>{falseButton.text}</Button>
        <Button onClick={trueButton.click}>{trueButton.text}</Button>
      </div>
    </>
  );
};

export default PopupBool;
