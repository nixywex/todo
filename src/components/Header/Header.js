import { useContext } from "react";
import { Context } from "../../context";

import TitleFolders from "../TitleFolders/TitleFolders";
import Search from "../Search/Search";

import styles from "./Header.module.scss";

function Header({ folders, activeFolder }) {
  const { searchValue, setSearchValue, openPopup } = useContext(Context);

  return (
    <div className={styles.header}>
      <TitleFolders folders={folders} activeFolder={activeFolder} />
      <div className={styles.right}>
        <Search
          className={styles.search}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <p
          onClick={() =>
            openPopup("folders", {
              text: "Все папки",
              folders,
            })
          }
        >
          ⚙️
        </p>
      </div>
    </div>
  );
}

export default Header;
