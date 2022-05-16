import React from 'react';

const SecondBody = () => {
	return (
		<div className='max-w-[500px] mt-12 mx-9 sm:w-8/12 sm:mx-auto'>
			<p className='text-sm'>
				STEP <b>1</b> OF <b>3</b>
			</p>
			<h3 className='text-3xl font-bold'>
				Welcome back!
				<br />
				Joining Netflix is easy.
			</h3>
			<h4 className='text-xl my-3'>
				Enter you password and you'll be watching in no time.
			</h4>
			<h5 className='mt-4'>Email</h5>
			<p className='font-semibold'>email@gmail.com</p>
			<div className='mt-5  relative w-full'>
				<input
					type='text'
					id='emailInput'
					className='w-full h-[3.75rem] pl-4 text-black form__item--input rounded border'
					required
				/>
				<label
					htmlFor='emailInput'
					className='absolute text-neutral-400 top-4 lg:text-lg form__item--label'
				>
					Enter your password
				</label>
				<p className='text-blue-600 font-medium text-lg my-7'>
					Forgot your password?
				</p>
				<button className='w-full text-white bg-primary rounded lg:mt-0 py-4 text-3xl hover:bg-red-500 mb-40'>
					Next
				</button>
			</div>
		</div>
	);
};

export default SecondBody;
