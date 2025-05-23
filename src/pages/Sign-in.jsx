import Input from '../components/Input';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
	return (
		<div className='m-10 md:max-w-[18em] md:m-auto '>
			<div className='md:mt-12'>
				<h1 className='text-4xl font-bold text-gray-800 mb-5'>
					Sign in to your PopX account
				</h1>
				<p className='text-gray-500 font-semibold text-[22px] mb-5'>
					Lorem ipsum dolor sit amet, consectetut adipiscing elit
				</p>
			</div>
			<div>
				<form
					action=''
					className='flex flex-col gap-5'
				>
					<Input
						type='email'
						placeholder='Enter email address'
						text='Email Address'
						name='e-mail'
					/>
					<Input
						type='password'
						placeholder='Enter password'
						text='Password'
						name='p-word'
					/>
					<NavLink to='/settings'>
						<Button
							type='submit'
							role='secondary'
							text='Login'
						/>
					</NavLink>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
