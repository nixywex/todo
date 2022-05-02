import React from "react";
import TitleFolder from "../TitleFolder/TitleFolder";

import styles from "./TitleFolders.module.scss";

function TitleFolders({ activeFolder, folders }) {
	return (
		<div className={styles.titleFoldersBlock}>
			<TitleFolder
				activeFolder={activeFolder}
				className={styles.folder}
				name='Активные'
			/>
			<TitleFolder
				activeFolder={activeFolder}
				className={styles.folder}
				name='Выполненные'
			/>
			{folders.map((folder) => {
				return (
					<TitleFolder
						activeFolder={activeFolder}
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
