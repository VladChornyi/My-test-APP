import { IoExitOutline } from "react-icons/io5";
import { logout } from "../../helpers/authorization";
import { LogoutButton } from "./LogoutBtn.styled";

const LogoutBtn = () => {
  return (
    <LogoutButton onClick={logout} type="button">
      Log out
      <IoExitOutline name="log-out-outline"></IoExitOutline>
    </LogoutButton>
  );
};

export default LogoutBtn;
