import React, { FC, useEffect, useRef, useState } from "react";

import { Form } from "@molecules/form";
import { useStore } from "effector-react";

export const FormPage: FC = () => {

	const [ username, setUsername ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ inputText, setInputText ] = useState("");
	const [ isRemember, setIsRemember ] = useState(false);
	const [ isOn, setIsOn ] = useState(false);
	const [ radio, setRadio ] = useState("radio-1");
	const [ dropdown, setDropdown ] = useState("Dropdown-1");

	return ( 
		<Form 
			username={username} 
			password={password} 
			inputText={inputText} 
			isRemember={isRemember}
			isOn={isOn}
			radio={radio}
			dropdown={dropdown}
		>
			<>
				<Form.Input 
					title="Username" 
					regexp={/^[a-zA-Z0-9_]+$/} 
					value={username}
					setter={setUsername}
				/>
				<Form.Input 
					title="Password" 
					regexp={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/} 
					assistiveText="Your password is between 4 and 12 characters"
					value={password}
					setter={setPassword}
				/>
				<Form.Input 
					title="Input Text Label" 
					value={inputText}
					setter={setInputText}
				/>
				<Form.CheckBox isCheked={isRemember} setter={setIsRemember}>
					Remember me
				</Form.CheckBox>
				<Form.Toggle
					isCheked={isOn}
					setter={setIsOn} 
					isTrue="On"
					isFalse="Off"
				/> 
				<Form.Radio value={radio} name="radio" setter={setRadio} > 
					Radio selection 1
				</Form.Radio>
				<Form.Radio value={radio} name="radio" setter={setRadio} > 
					Radio selection 2
				</Form.Radio>
				<Form.Radio value={radio} name="radio" setter={setRadio} > 
					Radio selection 3
				</Form.Radio>
				
				<Form.DropDown title="Dropdown Title"> 
					<Form.DropDown.Option setDropDown={setDropdown}>
						Dropdown option
					</Form.DropDown.Option>
					<Form.DropDown.Option setDropDown={setDropdown}>
						Dropdown option 1
					</Form.DropDown.Option>
					<Form.DropDown.Option setDropDown={setDropdown}>
						Dropdown option 2
					</Form.DropDown.Option>
				</Form.DropDown>

				<div className="flex w-full justify-between">
					<Form.Button type="button" style="clear"> 
						Cancel
					</Form.Button>
					<Form.Button type="submit" style="active"> 
						Next
					</Form.Button>
				</div>
			</>
		</Form>
	);
};
