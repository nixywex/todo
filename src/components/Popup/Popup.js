import React from "react";

import styles from "./Popup.module.scss";

function Popup({ children, trigger }) {
	return trigger ? (
		<div className={styles.popup}>
			<div className={styles.popupInner}>{children}</div>
		</div>
	) : (
		""
	);
}

export default Popup;
