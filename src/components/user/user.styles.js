import styled from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	padding: 10px 20px;
	height: 80px;
	width: 80vw;
	box-shadow: 0 0 8px 0px grey;
`;

const StyledProfile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const StyledImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
`;

const StyledNameAndUser = styled.div`
	display: flex;
	text-align: left;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledStatusAndButton = styled.div`
	display: flex;
	gap: 30px;
`;

const StyledButton = styled.button`
	justify-self: flex-end;
`;

export {
	StyledUser,
	StyledProfile,
	StyledImage,
	StyledNameAndUser,
	StyledStatusAndButton,
	StyledButton
};
