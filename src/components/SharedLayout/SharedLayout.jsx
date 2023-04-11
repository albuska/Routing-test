import { Outlet, NavLink } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout'; 
 
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Щось тут те що має буть в футері */}
      </footer>
    </div>
  );
    // <Container>
    //   <Header>
    //     <Logo>
    //       <span role="img" aria-label="computer icon">
    //         💻
    //       </span>{' '}
    //       GoMerch Store
    //     </Logo>
    //     <nav>
    //       <Link to="/">Home</Link>
    //       <Link to="/about">About</Link>
    //       <Link to="/products">Products</Link>
    //     </nav>
    //   </Header>
    //   <Outlet />
    // </Container>
  
};