import React from 'react';

const FirstBody = () => {
	return (
		<div className='max-w-[340px] mt-12 mx-auto py-28 sm:text-center'>
			<img src='/images/devices.png' alt='devices' className='h-16 mx-auto' />
			<p className='text-sm mt-8'>
				STEP <b>1</b> OF <b>3</b>
			</p>
			<h3 className='text-3xl sm:text-4xl font-semibold'>
				Finish setting up your account
			</h3>
			<p className='text-lg font-medium my-4'>
				Netflix is personalized for you.
				<br />
				Create a password to watch on any device at any time.
			</p>
			<button className='w-full text-white bg-primary rounded lg:mt-0 py-3 text-3xl hover:bg-red-500'>
				Next
			</button>
		</div>
	);
};

export default FirstBody;
