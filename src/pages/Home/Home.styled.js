import styled from "styled-components";

export const CV = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  .cv-name {
    text-transform: uppercase;
    font-size: 35px;
    margin-bottom: 20px;
  }
  .cv-position {
    margin-bottom: 40px;
  }
  .cv-wrapper {
    display: flex;
    width: 100%;
    border-top: 4px solid rgba(19, 92, 134, 0.3);
    padding: 50px 15px;

    .cv-leftSide {
      width: 35%;
      border-right: 4px solid rgba(19, 92, 134, 0.3);

      a {
        font-weight: normal;
      }
    }
    .cv-rightSide {
      width: 65%;
      padding: 0 50px;

      h2 {
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 10px;
        margin-top: 10px;
      }

      .cv-exp {
        margin-top: 20px;
      }
    }
  }
`;
