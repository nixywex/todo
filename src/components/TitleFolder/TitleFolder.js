import React, { useContext } from "react";
import classNames from "classnames";
import { Context } from "../../context";

import "./TitleFolder.scss";

function TitleFolder({ activeFolder, name }) {
	const { changeActiveFolder } = useContext(Context);

	return (
		<h2
			onClick={() => {
				changeActiveFolder(name);
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
