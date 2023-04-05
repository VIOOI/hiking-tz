import { Button } from "@atoms/button";
import { CheckBox } from "@atoms/chackbox";
import { DropDown } from "@atoms/dropdown";
import { Input } from "@atoms/input";
import { Radio } from "@atoms/radio";
import { Toggle } from "@atoms/toggle";
import React, { FC } from "react";

import "./style.scss";

type FormExtensions = {
	Input: typeof Input,
	CheckBox: typeof CheckBox,
	Toggle: typeof Toggle,
	Radio: typeof Radio,
	Button: typeof Button,
	DropDown: typeof DropDown,
}

type Props = {
	children: JSX.Element,
	username: string,
	password: string,
	inputText: string,
	isRemember: boolean,
	isOn: boolean,
	radio: string,
	dropdown: string,
}

type FormType = FC<Props> & FormExtensions;

const Form: FormType = (props) => {
	return ( 
		<form 
			className="form"
			onSubmit={event => {
				event.preventDefault();
				console.log({
					username: props.username,
					password: props.password,
					inputText: props.inputText,
					isRemember: props.isRemember,
					isOn: props.isOn,
					radio: props.radio,
					dropdown: props.dropdown,
				});
			}}
		>
			{ props.children }
		</form>
	);
};

Form.Input = Input;
Form.CheckBox = CheckBox;
Form.Toggle = Toggle;
Form.Radio = Radio;
Form.Button = Button;
Form.DropDown = DropDown;

export { Form };
