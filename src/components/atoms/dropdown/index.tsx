import React, { FC, useState } from "react";

import { Option } from "./option";

import "./style.scss";

type DropDownExtensions = {
	Option: typeof Option,
}

type Props = {
	title: string,
	children: React.ReactElement[],
}

type DropDownType = FC<Props> & DropDownExtensions

const DropDown: DropDownType = ({ title, children }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			setIsOpen(state => !state);
		}
	};

	return ( 
		<>
			<div 
				role="section" 
				tabIndex={0}
				className={"dropdown" + `${isOpen? " open": ""}`}
				onClick={() => {setIsOpen(state => !state);}}
				onKeyDown={handleKeyDown}
				onBlur={() => setIsOpen(false)}
			>
				<h3>{ title }</h3>
				<div className="icon"></div>
			</div>
			{
				isOpen 
					? React.Children.map(children, child => {
						return React.cloneElement(child, {
							closeDropDown: setIsOpen,
							...child.props,
						});
					})
					: null 
			}
		</>
	);
};

DropDown.Option = Option; 

export { DropDown };
