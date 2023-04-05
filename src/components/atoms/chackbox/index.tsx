import React, { FC } from "react";

import "./style.scss";

import checkBoxIcon from "../../../public/checkbox.svg";

type Props = {
	isCheked: boolean,
	setter: React.Dispatch<React.SetStateAction<boolean>>,
	children: string,
}
export const CheckBox: FC<Props> = ({ isCheked, setter, children }) => {
	return ( 
		<label className="checked">
			<input 
				type="checkbox" 
				checked={isCheked}
				onChange={() => {
					setter(!isCheked);
				}}
			/>
			<div>
				{
					isCheked 
						? <img src={checkBoxIcon} alt="" />
						: null
				}
			</div>
			{ children }
		</label>
	);
};
