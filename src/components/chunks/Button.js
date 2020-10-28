import styled from "styled-components";

const Button = styled.button`
    &.cardButton{
        background: ${({ theme }) => theme.button_bg};
        color:${({ theme }) => theme.text}
    
    }
    
    &.getStarted{
        background: ${({ theme }) => theme.get_started_bg};
        color:${({ theme }) => theme.get_started_text}
    }
    
    &.startFeeling{
        background: ${({ theme }) => theme.get_started_bg};
        color:${({ theme }) => theme.get_started_text}
    }
    &.getStarted{
        background: ${({ theme }) => theme.get_started_bg};
        color:${({ theme }) => theme.get_started_text}
    }
  
`;

export default Button;