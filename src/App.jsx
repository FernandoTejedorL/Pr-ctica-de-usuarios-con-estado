import Inputs from './components/form/Form';
import Header from './components/header/Header';
import User from './components/user/User';
import { USERS } from './constants/users-info';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Header text='Listado de usuarios' />
			<Inputs />
			{USERS.map(user => (
				<User key={user.id} {...user} />
			))}
		</div>
	);
};

export default App;
