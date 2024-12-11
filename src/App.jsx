import Inputs from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Users from './components/users/Users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Main>
			<GlobalStyles />
			<Header text='Listado de usuarios' />
			<Inputs />
			<Users />
		</Main>
	);
};

export default App;
