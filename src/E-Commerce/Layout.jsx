import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <div>
      <Link to='/'>Home</Link>
        <Link to='/registration'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/productlist'>ProductLists</Link>
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
