import styled from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	padding: 10px 20px;
	height: 80px;
	width: 80vw;
	box-shadow: 0 0 8px 0px grey;
`;

const StyledImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
`;

export { StyledUser, StyledImage };
