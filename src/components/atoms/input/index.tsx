import { Context } from "@store/context";
import { Event } from "effector";
import { useUnit } from "effector-react";
import React, { FC, useContext } from "react";

import { useIsValidity } from "../../../hooks/useIsValidity";
import Warn from "../../../public/warn.svg";

import "./style.scss";

type Props = {
	title: string,
	value: string,
	setter: React.Dispatch<React.SetStateAction<string>>,
	regexp?: RegExp,
	assistiveText?: string,
}

export const Input: FC<Props> =
	({ title, value, setter, regexp = /^[a-zA-Z0-9_]*$/, assistiveText = "" }) => {
	
		const isValidity = useIsValidity(value, regexp);

		return ( 
			<div className={"input" + `${isValidity? " not-validity" : ""}`}>
				<label>{ title }</label>
				<div className="input-wrapper">
					<input 
						type="text"
						placeholder={`Enter ${title.toLowerCase()}`}
						onChange={event => {
							setter(event.target.value);
						}}
					/>
					{
						isValidity 
							? <img src={Warn} alt="warning" width="20px" />
							: null
					}
				</div>
				<p>{ assistiveText }</p>
			</div>
		);
	};
