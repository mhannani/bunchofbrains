import styled from "styled-components";


const Button = styled.button`
    &.cardButton{
        background: ${({ theme }) => theme.button_bg};
        color:${({ theme }) => theme.text}
    
    }
    &.getStarted{
        background: ${({ theme }) => theme.get_started_bg};
        color:${({ theme }) => theme.text}
    }
  
  
`;

export default Button;


//
// color:${({ theme }) => theme.text}
//
// &--cardButton{
//     background: ${({ theme }) => theme.button_bg};
//
// }
// &--getStarted{
//     background: ${({ theme }) => theme.get_started_bg};
// }