import React, { FC } from "react";

import "./style.scss";

type Props = {
	name: string,
	children: string,
	setter: React.Dispatch<React.SetStateAction<string>>,
	value: string,
}

export const Radio: FC<Props> = ({ name, children, setter, value }) => {
	return ( 
		<label className="radio">
			<input 
				type="radio"
				name={name}
				value={children}
				onChange={(event) => {
					console.log(value == children);
					console.log(event.target);
				}}
			/>
			<div className="view">
			</div>
			{ children }
		</label>
	);
};
