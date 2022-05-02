import React, { useState } from "react";
import styles from "./Input.module.scss";

function Input(props) {
	return <input {...props} className={styles.input} />;
}

export default Input;
