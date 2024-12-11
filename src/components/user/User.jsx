import { StyledImage, StyledUser } from './user.styles';

const User = ({ profileImage, name, username, active }) => {
	return (
		<StyledUser>
			<StyledImage src={profileImage} alt='profileImage' />
			<div>
				<span>{name}</span>
				<span>@{username}</span>
			</div>
			<span>{active ? 'Activo' : 'Inactivo'}</span>
			<button>Ver Detalles</button>
		</StyledUser>
	);
};

export default User;
