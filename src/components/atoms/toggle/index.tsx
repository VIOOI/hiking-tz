import React, { FC } from "react";

import "./style.scss";

type Props = {
	isCheked: boolean,
	setter: React.Dispatch<React.SetStateAction<boolean>>,
	children: string,
	isTrue: string,
	isFalse: string,
}

export const Toggle: FC<Props> = ({ isCheked, setter, isTrue, isFalse }) => {
	return ( 
		<label className="toggle">
			<input 
				type="checkbox" 
				checked={isCheked}
				onChange={() => {
					setter(!isCheked);
				}}
			/>
			<div className="view">
			</div>
			{
				isCheked 
					? isTrue
					: isFalse
			}
		</label>
	);
};
