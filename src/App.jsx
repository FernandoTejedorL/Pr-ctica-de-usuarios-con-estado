import { useState } from 'react';
import Inputs from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Users from './components/users/Users';
import { GlobalStyles } from './styles/GlobalStyles';
import { USERS } from './constants/users-info';

const App = () => {
	const [users, setUsers] = useState(USERS);
	return (
		<Main>
			<GlobalStyles />
			<Header text='Listado de usuarios' />
			<Inputs />
			<Users />
		</Main>
	);
};

const marked = setUsers => {
	setUsers(USERS.filter(user => user.active));
	console.log(USERS);
};

const defaultOrder = setUsers => {
	console.log(USERS);
	setUsers(USERS);
};

const nameOrder = setUsers => {
	console.log(USERS);
	setUsers(USERS.sort((userA, userB) => userA.name.localeCompare(userB.name)));
	return USERS;
};

export { marked, defaultOrder, nameOrder };

export default App;
