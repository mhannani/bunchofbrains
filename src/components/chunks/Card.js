import styled from 'styled-components';

const Card = styled.div`
    background: ${({ theme }) => theme.card_bg};
    color:${({ theme }) => theme.text}
`;

export default Card