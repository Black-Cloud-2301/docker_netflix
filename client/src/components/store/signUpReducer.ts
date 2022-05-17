import { SignUpActionType } from './types';

const { SET_SIGNUP_INFO } = SignUpActionType;

export interface SignUpState {
	email: string;
	password: string;
}

type SignUpAction = {
	type: SignUpActionType;
	payload: SignUpState;
};

export const signUpReducer = (state: SignUpState, action: SignUpAction) => {
	switch (action.type) {
		case SET_SIGNUP_INFO:
			return {
				...state,
				email: action.payload.email,
				password: action.payload.password,
			};

		default:
			return state;
	}
};
