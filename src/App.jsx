import Inputs from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';
import User from './components/user/User';
import Users from './components/users/Users';
import { USERS } from './constants/users-info';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Main>
			<GlobalStyles />
			<Header text='Listado de usuarios' />
			<Inputs />
			<Users>
				{USERS.map(user => (
					<User key={user.id} {...user} />
				))}
			</Users>
		</Main>
	);
};

export default App;
