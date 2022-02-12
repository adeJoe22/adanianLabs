import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hero from "../assets/heroImg.png";
const HeroSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Wrap>
              <Heading>
                Take your <span>career</span> to the next level
              </Heading>
              <Details>
                Learn the latest skills, Prepare for a career path & Earn a
                recognised certification at your pace
              </Details>
              <Register to="/register">Register</Register>
            </Wrap>
          </Left>
          <Right>
            <HeroImage>
              <img src={hero} />
            </HeroImage>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  height: 500px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
  width: 485px;
  height: 318px;
  margin-left: 120px;
`;
const Heading = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 76px;
  margin-bottom: 10px;
  span {
    color: #13a8be;
  }
`;

const Details = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 30px;
`;

const Register = styled(NavLink)`
  width: 83px;
  height: 44px;
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
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HeroImage = styled.div`
  margin-top: 30px;
  margin-left: -15px;

  img {
    width: 670px;
  }
`;
