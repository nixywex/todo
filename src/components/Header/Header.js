import { useContext } from "react";
import { Context } from "../../context";

import TitleFolders from "../TitleFolders/TitleFolders";
import Search from "../Search/Search";

import styles from "./Header.module.scss";

function Header({ folders, activeFolder }) {
	const { searchValue, setSearchValue } = useContext(Context);

	return (
		<div className={styles.header}>
			<TitleFolders folders={folders} activeFolder={activeFolder} />
			<Search searchValue = {searchValue} setSearchValue = {setSearchValue}/>
		</div>
	);
}

export default Header;
