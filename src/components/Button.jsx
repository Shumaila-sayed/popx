const Button = ({ role, text }) => {
	return (
		<>
			<button
				className={`font-semibold px-4 py-2 rounded-md h-12 text-[18px] w-full cursor-pointer ${
					role === 'primary' ? 'bg-violet-600 text-gray-50 hover:bg-violet-800' : 'bg-gray-300 hover:bg-gray-400'
				}`}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
