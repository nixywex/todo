import React, { useContext } from "react";
import { Context } from "../../context";
import classNames from "classnames";

import "./TitleFolder.scss";

function TitleFolder({ activeFolder, name }) {
	const { setActiveFolder } = useContext(Context);

	return (
		<h2
			onClick={() => {
				setActiveFolder(name);
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
