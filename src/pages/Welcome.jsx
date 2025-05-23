import Button from "../components/Button";
import { NavLink } from 'react-router-dom';

const Welcome = () => {
    return (
			<div className='max-h-screen '>
				<div className='flex flex-col min-h-screen justify-end mx-6 md:max-w-max md:m-auto md:justify-center'>
					<div className='mb-8'>
						<h1 className='font-bold text-3xl mb-2'>Welcome to PopX</h1>
						<p className='opacity-60 text-[18px] '>
							Lorem ipsum dolor sit amet, consectetut adipiscing elit
						</p>
					</div>
					<div className='mb-6 flex flex-col gap-2'>
						<NavLink to='/sign-up'>
							<Button
								role='primary' 
                            text='Create Account'
                            className="min-w-[200px]"
							/>
						</NavLink>
						<NavLink to='/sign-in'>
							<Button
								role='secondary'
								text='Already Registered? Login'
							/>
						</NavLink>
					</div>
				</div>
			</div>
		);
}

export default Welcome;