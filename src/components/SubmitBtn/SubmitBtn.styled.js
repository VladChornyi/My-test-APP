import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 45px;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(19, 92, 134, 0.6);
  color: rgba(256, 256, 256, 0.7);
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(218, 126, 21, 0.8);
    /* color: rgba(19, 92, 134, 0.6); */
  }
`;
