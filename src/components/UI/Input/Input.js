import React, { useState } from "react";
import styles from "./Input.module.scss";

function Input(props) {
	const [value, setValue] = useState("");

	return (
		<input
			className={styles.input}
			{...props}
			value={value}
			onChange={setValue()}
		/>
	);
}

export default Input;
