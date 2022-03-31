import { logout } from "../../helpers/authorization";

const Header = ({ user }) => (
  <header>
    {user?.email ? `Hello, ${user.email} !` : null}
    {user ? (
      <button type="button" onClick={logout}>
        Log out
      </button>
    ) : null}
  </header>
);

export default Header;
