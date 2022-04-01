import { Head } from "./Header.styled";
import LogoutBtn from "../LogoutBtn";

const Header = ({ user }) => (
  <Head>
    <div className="container">
      {user?.email ? (
        <p className="title">
          Hello, <span className="email">{user.email}</span> !
        </p>
      ) : null}
      {user ? <LogoutBtn /> : null}
    </div>
  </Head>
);

export default Header;
