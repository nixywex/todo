import React from "react";
import TitleFolder from "../TitleFolder/TitleFolder";

import styles from "./TitleFolders.module.scss";

function TitleFolders({ activeFolder, handleFolderClick, folders }) {
	return (
		<div className={styles.titleFoldersBlock}>
			<TitleFolder
				activeFolder={activeFolder}
				onFolderClick={handleFolderClick}
				className={styles.folder}
				name='Активные'
			/>
			<TitleFolder
				activeFolder={activeFolder}
				onFolderClick={handleFolderClick}
				className={styles.folder}
				name='Выполненные'
			/>
			{folders.map((folder) => {
				return (
					<TitleFolder
						activeFolder={activeFolder}
						onFolderClick={handleFolderClick}
						key={folder}
						className={styles.folder}
						name={folder}
					/>
				);
			})}
		</div>
	);
}

export default TitleFolders;
