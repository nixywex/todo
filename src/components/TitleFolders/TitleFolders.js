import TitleFolder from "../TitleFolder/TitleFolder";

import styles from "./TitleFolders.module.scss";

function TitleFolders({ activeFolder, folders }) {
  return (
    <div className={styles.titleFoldersBlock}>
      <TitleFolder activeFolder={activeFolder} name="Активные" />
      <TitleFolder activeFolder={activeFolder} name="Выполненные" />
      {folders.map((folder) => {
        return (
          <TitleFolder activeFolder={activeFolder} key={folder} name={folder} />
        );
      })}
    </div>
  );
}

export default TitleFolders;
