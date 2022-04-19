import React from "react";
import classNames from "classnames";

import "./TitleFolder.scss";

function TitleFolder({ activeFolder, name, onFolderClick }) {
	return (
		<h2
			onClick={() => {
				onFolderClick(name);
			}}
			className={classNames({
				title: true,
				active: activeFolder === name,
			})}
		>
			{name}
		</h2>
	);
}

export default TitleFolder;
