import { useEffect, useState } from 'react';

export interface Props {
	setNotRemember: (val: boolean) => void;
}

const FirstPart = ({ setNotRemember }: Props) => {
	const [selected, setSelected] = useState<string>('email');
	const [valueInput, setValueInput] = useState<string>('');
	const [validate, setValidate] = useState({ status: true, message: '' });

	function isNumeric(value: string) {
		return /^-?\d+$/.test(value);
	}

	useEffect(() => {
		if (selected === 'email') {
			if (
				(!valueInput.includes('.') || !valueInput.includes('@')) &&
				valueInput.length > 0
			)
				setValidate({ status: false, message: 'Please enter valid email!' });
			else setValidate({ status: true, message: '' });
		} else {
			if (!isNumeric(valueInput) && valueInput.length > 0) {
				setValidate({
					status: false,
					message: 'Please enter valid phone number!',
				});
			} else {
				setValidate({ status: true, message: '' });
			}
		}

		console.log('useEffect Forgot Password active');
	}, [selected, validate.status, valueInput]);
	return (
		<div>
			<p className='text-lg my-2'>How would you like to reset your password?</p>
			<div className='mx-4'>
				<input
					type='radio'
					name='selectItem'
					id='email'
					value='email'
					defaultChecked
					onChange={(e) => setSelected(e.target.value)}
				/>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='radio'
					name='selectItem'
					id='sms'
					value='sms'
					onChange={(e) => setSelected(e.target.value)}
				/>
				<label htmlFor='sms'>Text Message (SMS)</label>
			</div>
			{selected === 'email' ? (
				<div className='my-4 text-lg'>
					<p>
						We will send you an email with instructions on how to reset your
						password.
					</p>
					<input
						type='text'
						placeholder='name@example.com'
						className={
							validate.status
								? 'w-full p-2 border border-neutral-400 rounded-sm mt-2 outline-none'
								: 'w-full p-2 border border-orange-500 rounded-sm mt-2 outline-none'
						}
						value={valueInput}
						onChange={(e) => setValueInput(e.target.value)}
					/>
					{!validate.status && (
						<p className='text-sm text-orange-500'>{validate.message}</p>
					)}
				</div>
			) : (
				<div className='my-4 text-md'>
					<p className='mb-3'>
						We will text you a verification code to reset your password. Message
						and data rates may apply.
					</p>
					<select
						name=''
						id=''
						className='w-3/12 h-12 border-y border-l border-neutral-400 bg-white'
					>
						<option value='vn'>+84</option>
						<option value='venezuela'>+58</option>
					</select>
					<input
						type='text'
						className={
							validate.status
								? 'w-9/12 h-12 border border-neutral-400 px-4 outline-none'
								: 'w-9/12 h-12 border border-orange-500 px-4 outline-none'
						}
						value={valueInput}
						onChange={(e) => setValueInput(e.target.value)}
					/>
					{!validate.status && (
						<p className='text-sm text-orange-500'>{validate.message}</p>
					)}
				</div>
			)}
			<button
				className={
					validate.status
						? 'w-full h-12 bg-blue-500 text-white text-2xl rounded-sm mt-4 hover:bg-blue-400'
						: 'w-full h-12 bg-blue-300 text-white text-2xl rounded-sm mt-4 pointer-events-none'
				}
			>
				{selected === 'email' ? <>Email Me</> : <>Text Me</>}
			</button>
			<button
				className='text-blue-500 mt-6 hover:underline'
				onClick={() => setNotRemember(true)}
			>
				I don't remember my email or phone.
			</button>
		</div>
	);
};

export default FirstPart;
