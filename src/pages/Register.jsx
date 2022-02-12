import React from "react";
import Background from "../ui/background";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Background>
        <FormCard>
          <Google>Continue with Google</Google>
          <TopWrap>
            <Welcome>
              <div>Your tech journey starts here</div>
              <p>Sign up to create an account</p>
            </Welcome>
            <InputWrap>
              <Input type="email" placeholder="Email address" />
              <Input type="email" placeholder="Re-enter email address" />
              <div>
                By applying for the internship, I agree to AdanianLabs Terms and
                Conditions and Privacy Policy
              </div>
            </InputWrap>
            <Link to={"/verify-email"}>
              <RegisterBtn>Register</RegisterBtn>
            </Link>
          </TopWrap>

          <BottomWrap>
            <div>Already have an account?</div>
            <Link to="/login">
              <SecondaryButton type={"submit"}>Login</SecondaryButton>
            </Link>
          </BottomWrap>
        </FormCard>
      </Background>
    </>
  );
};

export default Register;
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
    align-items: center;
    color: #13a8be;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
`;

const RegisterBtn = styled.button`
  width: 100%;
  height: 72px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #d1d1d1;
  font-size: 24px;
`;

const SecondaryButton = styled(RegisterBtn)`
  background-color: transparent;
  border: solid 1px #f39712;
  color: #f39712;
`;
const Input = styled.input`
  width: 502px;
  height: 56px;
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 4px;
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
