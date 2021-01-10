import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
    return (  
        <ContenedorHeader>
        <Titulo>Mi Blog Personal</Titulo>
        <Menu>
          <NavLink exact={true} to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/acerca-de">Acerca de</NavLink>
         </Menu>
</ContenedorHeader>





    );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`   
    
    a {
        text-decoration: none;
        color: black;
        margin: 0 10px;
        
    }

    a:hover {
        color: blue;
    }
    
    a.active {
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }

    
`;
 
export default Header;