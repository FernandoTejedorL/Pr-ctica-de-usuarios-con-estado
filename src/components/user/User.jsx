import {
	StyledImage,
	StyledNameAndUser,
	StyledProfile,
	StyledStatusAndButton,
	StyledUser
} from './user.styles';

const User = ({ profileImage, name, username, active }) => {
	return (
		<StyledUser>
			<StyledProfile>
				<StyledImage src={profileImage} alt='profileImage' />
				<StyledNameAndUser>
					<span>{name}</span>
					<span>@{username}</span>
				</StyledNameAndUser>
			</StyledProfile>
			<StyledStatusAndButton>
				<span>{active ? 'Activo' : 'Inactivo'}</span>
				<button>Ver Detalles</button>
			</StyledStatusAndButton>
		</StyledUser>
	);
};

export default User;
