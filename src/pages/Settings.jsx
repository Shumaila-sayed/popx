const Settings = () => {
	return (
		<div className=' min-h-screen flex flex-col max-h-screen'>
			<div className='py-5 px-4'>
				<h1 className='text-[20px] '>Account Settings</h1>
			</div>
			<div className='bg-gray-100 flex-grow p-5'>
				<div className=' flex gap-6 '>
					<div className='relative'>
						<img
							src='Face.jpeg'
							alt='profile pic'
							className='rounded-full w-[55px] h-[55px]'
						/>
						<span className='absolute top-9 left-12 w-[16px] h-[16px]'>
							<img
								src='camera.svg'
								alt=''
							/>
						</span>
					</div>

					<div>
						<p className='font-semibold'>Marry Doe</p>
						<p className='mt-[-5px]'>Marry@gmail.com</p>
					</div>
				</div>
				<div className='mt-6 text-gray-500 font-semibold md:w-[360px]'>
					<p>
						Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed diam
						Nonumy Eirmod Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed
						Diam
					</p>
				</div>
			</div>
		</div>
	);
};

export default Settings;
