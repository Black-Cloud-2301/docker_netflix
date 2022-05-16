import React, { useState } from 'react';
import FifthBody from './FifthBody';
import FirstBody from './FirstBody';
import Footer from './Footer';
import FourthBody from './FourthBody';
import Header from './Header';
import SecondBody from './SecondBody';
import SixthBody from './SixthBody';
import ThirdBody from './ThirdBody';

const SignUp = () => {
	const [nextPage, setNextPage] = useState<number>(5);

	return (
		<div>
			<Header />
			{nextPage === 0 && <FirstBody />}
			{nextPage === 1 && <SecondBody />}
			{nextPage === 2 && <ThirdBody />}
			{nextPage === 3 && <FourthBody />}
			{nextPage === 4 && <FifthBody />}
			{nextPage === 5 && <SixthBody />}
			<Footer />
		</div>
	);
};

export default SignUp;
