import React from "react";
import styled from "styled-components";
import logo from "../assets/adanianLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo to="/">
            <img src={logo} alt="adanian-labs-logo" />
          </Logo>
          <Wrap>
            <Navigation>
              <Navs to="/">Home</Navs>
              <Navs to="/">Courses</Navs>
              <Navs to="/">Testimonials</Navs>
              <Navs to="/">Partners</Navs>
              <Navs to="/contact">Contact</Navs>
            </Navigation>
            <Login to="/login">Login</Login>
          </Wrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(NavLink)`
  margin-left: 120px;
`;
const Wrap = styled.div`
  width: 688px;
  height: 53px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
`;
const Navigation = styled.div`
  width: 507px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navs = styled(NavLink)`
  padding: 10px;
  gap: 10px;
  transition: all 350ms;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #13a8be;
  }
`;
const Login = styled(NavLink)`
  width: 66px;
  height: 40px;
  color: #13a8be;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, rgba(243, 151, 18, 1), rgba(250, 182, 83, 0.59))
      border-box;
  border-radius: 4px;
  border: solid 2px transparent;
  cursor: pointer;
`;
