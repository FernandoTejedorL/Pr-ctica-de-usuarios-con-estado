import { USERS } from '../../constants/users-info';
import User from '../user/User';

const Users = () => {
	return USERS.map(user => <User key={user.id} {...user} />);
};

export default Users;
