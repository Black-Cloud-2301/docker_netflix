import React, { useEffect, useState } from 'react';
import { Props } from './FirstPart';

interface InputFormState {
	firstName: string;
	lastName: string;
	credit: string;
}

const SecondPart = ({ setNotRemember }: Props) => {
	const [inputForm, setInputForm] = useState<InputFormState>({
		firstName: '',
		lastName: '',
		credit: '',
	});
	const [validate, setValidate] = useState<boolean>(false);

	useEffect(() => {
		if (inputForm.firstName && inputForm.lastName && inputForm.credit) {
			setValidate(true);
		} else setValidate(false);
	}, [inputForm.credit, inputForm.firstName, inputForm.lastName, validate]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value.trim(),
		}));
	};

	return (
		<div className=''>
			<p className='text-lg leading-5 mt-4'>
				Please provide this information to help us find your account (all fields
				required):
			</p>
			<div className='mt-4'>
				<label htmlFor='firstName' className='text-neutral-500'>
					First name on account
				</label>
				<input
					type='text'
					name='firstName'
					className='w-full h-12 border border-neutral-400 rounded-sm outline-none pl-4'
					value={inputForm.firstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mt-4'>
				<label htmlFor='lastName' className='text-neutral-500'>
					Last name on account
				</label>
				<input
					type='text'
					name='lastName'
					className='w-full h-12 border border-neutral-400 rounded-sm outline-none pl-4'
					value={inputForm.lastName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mt-4'>
				<label htmlFor='firstName' className='text-neutral-500'>
					Credit or debit card number on file
				</label>
				<input
					type='text'
					name='credit'
					className='w-full h-12 border border-neutral-400 rounded-sm outline-none pl-4'
					value={inputForm.credit}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='flex flex-col sm:flex-row'>
				<button
					className={
						validate
							? 'w-full sm:w-36 h-12 sm:h-10 bg-blue-500 text-white text-lg rounded-sm mt-4 hover:bg-blue-400 drop-shadow-md'
							: 'w-full sm:w-36 h-12 sm:h-10 bg-blue-300 text-white text-lg rounded-sm mt-4 drop-shadow-md pointer-events-none'
					}
				>
					Find Account
				</button>
				<button
					className='w-full sm:w-36 h-12 sm:h-10 bg-neutral-300 text-black text-lg rounded-sm mt-4 sm:ml-4 hover:bg-blue-400 drop-shadow-md'
					onClick={() => setNotRemember(false)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default SecondPart;
