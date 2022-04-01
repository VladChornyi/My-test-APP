import styled from "styled-components";

export const Head = styled.header`
  height: 50px;
  /* border-bottom: 1px solid rgba(0, 0, 255, 1); */
  box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.1);
  color: rgb(19, 92, 134);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .title {
    font-size: 16px;
    .email {
      font-weight: bold;
    }
  }
`;
