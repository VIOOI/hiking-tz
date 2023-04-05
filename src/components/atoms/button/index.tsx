import React, { FC } from "react";

import "./style.scss";

type Props = {
	children: string,
	style: "active" | "clear",
	type?: "submit" | "button",
}

export const Button: FC<Props> = ({ children, style, type = "button" }) => {
	return ( 
		<button 
			type={type}
			className={style}
		>
			{ children }
		</button>
	);
};
