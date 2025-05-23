const Input = ({ type, text, placeholder, name }) => {
	return (
		<div className='relative' >
			<input
				type={type}
				placeholder={placeholder}
				id={name}
				required
				className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
			/>
			<label
				htmlFor={name}
				className='absolute text-lg text-blue-800  transform scale-75 -translate-y-4 top-1 z-10 origin-[0] bg-white px-2 start-1'
			>
				{text} <span className="text-red-500 text-md">*</span>
			</label>
		</div>
	);
};

export default Input;
