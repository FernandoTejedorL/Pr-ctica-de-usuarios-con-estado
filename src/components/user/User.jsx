const User = ({ profileImage, name, username }) => {
	const status = user => (user.active ? 'Activo' : 'Inactivo');
	return (
		<div>
			<img src={profileImage} alt='profileImage' />
			<div>
				<span>{name}</span>
				<span>@{username}</span>
			</div>
			<span>{status}</span>
			<button>Ver Detalles</button>
		</div>
	);
};

export default User;
