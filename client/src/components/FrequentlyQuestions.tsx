import { useState } from 'react';

export interface QuestionProps {
	question: string;
	answers: string[];
}

const FrequentlyQuestions = ({ question, answers }: QuestionProps) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div className='text-white w-8/12 mx-auto'>
			<div className='flex justify-between items-center w-full bg-[#303030] mt-4'>
				<h4 className=' p-6 text-2xl'>{question}</h4>
				<img
					src='/icons/add.svg'
					alt='add'
					width={36}
					onClick={() => setOpen(!open)}
					className={
						open
							? 'rotate-45 transition-transform duration-300 ease-in-out'
							: 'transition-transform duration-300 ease-in-out'
					}
				/>
			</div>
			<div className={open ? 'scale-100' : 'scale-0 duration-300 ease-in-out'}>
				<div className={'p-6 bg-[#303030] mt-1'}>
					{answers.map((answer, index) => {
						return (
							<p key={index} className='pb-4'>
								{answer}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FrequentlyQuestions;
