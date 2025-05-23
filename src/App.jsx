import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import Settings from './pages/Settings.jsx';
import SignIn from './pages/Sign-in.jsx';
import SignUp from './pages/Sign-up.jsx';

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
