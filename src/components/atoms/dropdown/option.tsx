import React, { FC } from "react";

type Props = {
	children: string,
	closeDropDown?: React.Dispatch<React.SetStateAction<boolean>>,
	setDropDown: React.Dispatch<React.SetStateAction<string>>,
}


export const Option: FC<Props> = ({ children, closeDropDown, setDropDown }) => {
	return ( 
		<div 
			className="dropdown-item"
			onClick={() => {
				closeDropDown(false);
				setDropDown(children);
			}}
		>
			{ children }
		</div>
	);
};
