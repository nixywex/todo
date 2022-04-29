import React from "react";
import styles from "./Button.module.scss";

function Button({ children, action, id }) {
	return (
		<button className={styles.button} onClick={() => action(id)}>
			{children}
		</button>
	);
}

export default Button;
