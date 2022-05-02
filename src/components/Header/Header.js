import React, { useContext } from "react";
import TitleFolders from "../TitleFolders/TitleFolders";
import { Context } from "../../context";
import styles from "./Header.module.scss";

function Header({ folders, activeFolder }) {
	const { setActiveFolderHandle } = useContext(Context);
	const handleFolderClick = (name) => {
		setActiveFolderHandle(name);
	};

	return (
		<div className={styles.header}>
			<TitleFolders
				folders={folders}
				handleFolderClick={handleFolderClick}
				activeFolder={activeFolder}
			/>
		</div>
	);
}

export default Header;
