import React from "react";
import TitleFolders from "../TitleFolders/TitleFolders";
import styles from "./Header.module.scss";

function Header({ folders, activeFolder }) {
	return (
		<div className={styles.header}>
			<TitleFolders folders={folders} activeFolder={activeFolder} />
		</div>
	);
}

export default Header;
