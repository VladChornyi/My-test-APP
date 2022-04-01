import { SubmitButton } from "./SubmitBtn.styled";

const SubmitBtn = ({ content }) => {
  return (
    <SubmitButton className="submit-btn" type="submit">
      {content}
    </SubmitButton>
  );
};

export default SubmitBtn;
