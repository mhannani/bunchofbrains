import styled from 'styled-components';
// import NavLink from "react-router-dom/modules/NavLink";
const HeaderLink = styled.span`
    color: ${({ theme }) => theme.Header_link_color};
   
    &.excluded{
      color: ${({ theme }) => theme.get_started_text};
    }
`;

export default HeaderLink;