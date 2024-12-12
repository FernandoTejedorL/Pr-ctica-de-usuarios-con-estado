import { useState } from 'react';
import Inputs from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';
import Checkbox from './components/checkbox/Checkbox';
import { USERS } from './constants/users-info';
import User from './components/user/User';
import TextInput from './components/textInput/TextInput';
import Select from './components/select/Select';

const App = () => {
	const [active, setActive] = useState(false);
	const [search, setSearch] = useState('');
	const [order, setOrder] = useState('default');
	let mainUsers = active ? USERS.filter(user => user.active) : USERS;
	mainUsers = findByText(mainUsers, search);
	mainUsers = orderByName(mainUsers, order);
	return (
		<Main>
			<GlobalStyles />
			<Header text='Listado de usuarios' />
			<Inputs>
				<TextInput
					text={search}
					searching={event => textSearch(event, setSearch)}
				/>
				<Checkbox actived={active} change={() => setActive(!active)} />
				<Select
					selected={event => orderChange(event, setOrder)}
					order={order}
				/>
			</Inputs>
			{mainUsers.map(user => (
				<User key={user.userId} {...user} />
			))}
		</Main>
	);
};

const textSearch = (event, setSearch) => {
	setSearch(event.target.value);
};
const findByText = (users, text) => {
	if (text === '') {
		return users;
	} else {
		return users.filter(user =>
			user.name.toLowerCase().includes(text.toLowerCase())
		);
	}
};

const orderChange = (event, setOrder) => {
	setOrder(event.target.value);
	console.log(event.target.value);
};

const orderByName = (users, order) => {
	if (order === 'default') {
		return users;
	}
	return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

export default App;
