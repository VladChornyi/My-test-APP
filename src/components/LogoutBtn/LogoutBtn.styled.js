import styled from "styled-components";

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: rgb(19, 92, 134);
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  svg {
    height: 40px;
    width: 30px;
  }

  &:hover,
  &:focus {
    color: #da7e15;
  }
`;
