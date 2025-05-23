import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Settings from './pages/settings';
import SignIn from './pages/sign-in';
import SignUp from './pages/Sign-up';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route
						path='/'
						element={<Welcome />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn />}
					/>
					<Route
						path='/sign-up'
						element={<SignUp />}
					/>
					<Route
						path='/settings'
						element={<Settings />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
