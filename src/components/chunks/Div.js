import styled from 'styled-components';

const Div = styled.div`
    background: ${({ theme }) => theme.body};
    color:${({ theme }) => theme.text}
`;

export default Div