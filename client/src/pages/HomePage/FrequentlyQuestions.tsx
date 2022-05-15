import { useState } from 'react';

export interface QuestionProps {
	question: string;
	answers: string[];
}

const FrequentlyQuestions = ({ question, answers }: QuestionProps) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div
			className='text-white mx-auto sm:px-16 lg:w-8/12'
			onClick={() => setOpen(!open)}
		>
			<div className='flex justify-between items-center w-full bg-[#303030] mt-2'>
				<h4 className='p-3 lg:px-8 lg:py-6 text-xl lg:text-3xl lg:font-medium'>
					{question}
				</h4>
				<img
					src='/icons/add.svg'
					alt='add'
					width={36}
					className={
						open
							? 'rotate-45 transition-transform duration-300 ease-in-out mr-4'
							: 'transition-transform duration-300 ease-in-out mr-4'
					}
				/>
			</div>
			<div className='overflow-hidden'>
				<div
					className={
						open
							? 'max-h-[500px] transition-[max-height] duration-150 ease-in'
							: 'max-h-0 overflow-hidden transition-[max-height] duration-150 ease-in'
					}
				>
					<div className='p-3 bg-[#303030] mt-[1px] lg:px-8 lg:py-6'>
						{answers.map((answer, index) => {
							return (
								<p key={index} className='pb-4 text-2xl'>
									{answer}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrequentlyQuestions;
