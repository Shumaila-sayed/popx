import Input from '../components/Input';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const SignUp = () => {
	return (
		<div className='min-h-screen flex flex-col mx-10 pt-10 md:max-w-[20em] md:m-auto md:pt-2'>
			<h1 className='text-3xl font-bold mb-8 mt-3 text-gray-900'>
				Create your PopX account
			</h1>
			<div className='flex flex-col flex-grow'>
				<form
					action=''
					className='flex flex-col gap-4 flex-grow'
				>
					<Input
						type='text'
						placeholder='Marry Doe'
						text='Full Name'
						name='f-name'
					/>
					<Input
						type='tel'
						placeholder='7021458'
						text='Phone number'
						name='p-num'
					/>
					<Input
						type='email'
						placeholder='marrydoe@gmail.com'
						text='Email Address'
						name='e-mail'
					/>
					<Input
						type='password'
						placeholder='Password'
						text='Password'
						name='p-word'
					/>
					<Input
						type='text'
						placeholder='Google'
						text='Company name'
						name='c-name'
					/>
					<p>
						Are you an Agency? <span className='text-red-500 text-md'>*</span>
					</p>
					<div className='flex gap-3'>
						<input
							type='radio'
							id='yes'
							name='agency'
							value='Yes'
							defaultChecked
							required
						/>
						<label htmlFor='Yes'>Yes</label>

						<input
							type='radio'
							id='no'
							name='agency'
							value='No'
						/>
						<label htmlFor='no'>No</label>
					</div>
					
						<NavLink to='/settings' className='mt-auto mb-10 md:mb-4'>
							<Button
								type='submit'
								role='primary'
								text='Create Account'
							/>
						</NavLink>
					
				</form>
			</div>
		</div>
	);
};

export default SignUp;
