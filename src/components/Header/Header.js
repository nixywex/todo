import React, { useContext } from "react";
import { Context } from "../../context";

import TitleFolders from "../TitleFolders/TitleFolders";
import Input from "../UI/Input/Input";

import styles from "./Header.module.scss";

function Header({ folders, activeFolder }) {
	const { searchValue, setSearchValue } = useContext(Context);

	return (
		<div className={styles.header}>
			<TitleFolders folders={folders} activeFolder={activeFolder} />
			<Input
				type='search'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder={"Поиск по задачам..."}
			/>
		</div>
	);
}

export default Header;
