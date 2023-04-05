import { Button } from "@atoms/button";
import { CheckBox } from "@atoms/chackbox";
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
}

type Props = {
	children: JSX.Element,
}

type FormType = FC<Props> & FormExtensions;

const Form: FormType = ({ children }) => {
	return ( 
		<form className="form">
			{ children }
		</form>
	);
};

Form.Input = Input;
Form.CheckBox = CheckBox;
Form.Toggle = Toggle;
Form.Radio = Radio;
Form.Button = Button;

export { Form };
