import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: calc(100vh / 2 - 275px);
  border-radius: 15px;
  height: 460px;
  width: 450px;
  position: relative;
  overflow: hidden;
  background-color: rgba(256, 256, 256, 0.8);
  box-shadow: -10px 0px 13px -7px rgba(128, 128, 128, 0.35),
    10px 0px 13px -7px rgba(128, 128, 128, 0.35),
    5px 6px 7px -1px rgba(128, 128, 128, 0.35);

  /* &::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 500px;
    background-image: url("https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100");
  } */

  .state-button {
    width: 50%;
    height: 40px;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.4);
    border-radius: 0px 15px 0px 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 26px;
    text-transform: uppercase;

    &:disabled {
      color: rgba(0, 0, 0, 0.6);

      text-decoration: underline;
      text-decoration-color: rgb(228, 217, 186);
      text-decoration-thickness: 5px;
    }
  }

  .signup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    transition: all 0.3s ease;
  }

  .input-wrapper {
    overflow: hidden;
    margin-top: 50px;

    .auth-input {
      border: 0;
      outline: none;
      box-shadow: none;
      display: block;
      height: 30px;
      line-height: 30px;
      padding: 8px 15px;
      border-bottom: 1px solid #eee;
      width: 90%;
      font-size: 15px;
      background-color: #fff;
      border-radius: 15px 15px;
      &:first-child {
        margin-bottom: 30px;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .label {
    position: relative;
  }
  .error {
    position: absolute;
    top: 40px;
    font-size: 10px;
    color: rgba(255, 0, 0, 0.65);
    font-weight: bold;
    width: 100px;
  }

  .submit-btn {
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(256, 256, 256, 0.7);
    border: 0;
    border-radius: 15px;
    display: block;
    margin: 30px auto auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgb(208, 200, 166);
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
