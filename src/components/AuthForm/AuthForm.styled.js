import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: calc(100vh / 2 - 275px);
  border-radius: 15px;
  height: 460px;
  width: 450px;
  position: relative;
  background-color: rgba(256, 256, 256, 0.8);
  box-shadow: -10px 0px 13px -7px rgba(8, 116, 167, 0.1),
    10px 0px 13px -7px rgba(8, 116, 167, 0.1),
    5px 6px 7px -1px rgba(8, 116, 167, 0.1),
    5px -6px 7px -1px rgba(8, 116, 167, 0.1);

  .state-button {
    width: 50%;
    height: 40px;
    cursor: pointer;
    border: none;
    outline: none;
    color: rgba(19, 92, 134, 0.6);
    border-radius: 0px 15px 0px 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 26px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      color: #da7e15;
    }

    &:disabled {
      color: rgba(19, 92, 134, 1);

      text-decoration: underline;
      text-decoration-color: rgba(19, 92, 134, 0.3);
      text-decoration-thickness: 5px;
    }
  }

  .signup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    transition: all 0.3s ease;
  }

  .input-wrapper {
    margin-top: 50px;

    .auth-input {
      border: 0;
      outline: none;
      box-shadow: none;
      display: block;
      height: 30px;
      line-height: 30px;
      padding: 8px 15px;
      border-bottom: 1px solid rgba(19, 92, 134, 0.6);
      width: 90%;
      font-size: 15px;
      background-color: #fff;
      border-radius: 15px 15px;
      &:first-child {
        margin-bottom: 30px;
      }
      &::placeholder {
        color: rgba(19, 92, 134, 0.6);
      }
    }
  }
  .label {
    position: relative;
  }
  .error {
    position: absolute;
    top: 50px;
    left: 15px;
    font-size: 10px;
    color: rgba(255, 0, 0, 0.65);
    font-weight: bold;
    width: 100px;
  }

  .submit-btn {
    margin: 30px auto auto;
  }
`;
