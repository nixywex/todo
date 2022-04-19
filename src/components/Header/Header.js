import React from "react";
import TitleFolders from "../TitleFolders/TitleFolders";

import styles from "./Header.module.scss";

function Header({ controller }) {
	const handleFolderClick = (name) => {
		controller.setActiveFolderHandle(name);
	};

	return (
		<div className={styles.header}>
			<TitleFolders
				folders={controller.folders}
				handleFolderClick={handleFolderClick}
				activeFolder={controller.activeFolder}
			/>
		</div>
	);
}

export default Header;
