import React, { useState } from "react";
import styled from "styled-components";
import Background from "../ui/background";
import { PrimaryButton } from "../ui/buttons/primary";
import { SecondaryButton } from "../ui/buttons/secondary";
import { TextField } from "../ui";

const IData = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState(IData);
  const [disabled, setDisabled] = useState(false);

  const { email, password } = data;
  console.log(data);

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Background>
      <FormCard onSubmit={onSubmitHandle}>
        <Google>Continue with Google</Google>

        <TopWrap>
          <Welcome>
            <div>Welcome!</div>
            <p>Let’s get back to work</p>
          </Welcome>

          <InputWrap>
            <TextField
              width={502}
              placeholder={"Email address"}
              value={email}
              onChange={(email) => {
                setData((prev) => ({ ...prev, email }));
              }}
            />
            <TextField
              width={502}
              placeholder={"Password"}
              value={password}
              onChange={(password) =>
                setData((prev) => ({ ...prev, password }))
              }
            />
            <div>Forgot password?</div>
          </InputWrap>

          <PrimaryButton
            disabled={!email && !password}
            border={`none`}
            height={72}
            type={"submit"}
            color={"#ffffff"}
          >
            Login
          </PrimaryButton>
        </TopWrap>
        <BottomWrap>
          <div>Don't have an account?</div>
          <SecondaryButton
            border={`solid 1px #f39712`}
            height={60}
            type={"submit"}
            color={"#f39712"}
            onClick={() => alert("This is secondary button")}
          >
            Sign up
          </SecondaryButton>
        </BottomWrap>
      </FormCard>
    </Background>
  );
};

export default Login;

const FormCard = styled.form`
  width: 650px;
  padding: 60px 32px;
  margin: 100px 0;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrap = styled.div`
  width: 502px;
  height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;
const Google = styled.button`
  width: 502px;
  height: 76px;
  border: 1px solid #f39712;
  background-color: transparent;
  font-size: 24px;
`;

const Welcome = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  div {
    font-size: 32px;
    color: #13a8be;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    align-items: flex-end;
    color: #13a8be;
    justify-content: flex-end;
    font-size: 12px;
    cursor: pointer;
  }
`;

const BottomWrap = styled.div`
  width: 502px;
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  border-top: 2px solid #13a8be;
  div {
    width: 100%;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  }
`;
