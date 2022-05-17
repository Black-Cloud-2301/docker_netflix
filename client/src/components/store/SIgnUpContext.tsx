import { createContext, ReactNode, useReducer } from 'react';
import { signUpReducer, SignUpState } from './signUpReducer';
import { SignUpActionType } from './types';

const { SET_SIGNUP_INFO } = SignUpActionType;

interface SignUpContextProps {
	children: ReactNode;
}

interface InitialSignUpInfo {
	signUpInfo: SignUpState;
	setSignUpInfo: (val: SignUpState) => void;
}

const initialSignUpInfo = {
	email: '',
	password: '',
};

export const SignUpContext = createContext<InitialSignUpInfo>({
	signUpInfo: initialSignUpInfo,
	setSignUpInfo: () => {},
});

const SignUpContextProvider = ({ children }: SignUpContextProps) => {
	const [signUpInfo, dispatch] = useReducer(signUpReducer, initialSignUpInfo);

	const setSignUpInfo = (signUpInfo: SignUpState) =>
		dispatch({ type: SET_SIGNUP_INFO, payload: signUpInfo });

	const signUpContextData = {
		signUpInfo,
		setSignUpInfo,
	};

	return (
		<SignUpContext.Provider value={signUpContextData}>
			{children}
		</SignUpContext.Provider>
	);
};

export default SignUpContextProvider;
