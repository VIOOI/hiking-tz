import { useEffect, useState } from "react";

type useIsValidityType = (
	data: string,
	regexp: RegExp,
) => boolean

export const useIsValidity: useIsValidityType = (inputString, regexpPattern) => {
	const [ matches, setMatches ] = useState(false);

	useEffect(() => {
		setMatches(regexpPattern.test(inputString));
	}, [ inputString, regexpPattern ]);

	return matches;
};
