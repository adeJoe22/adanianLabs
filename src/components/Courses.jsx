import React from "react";
import styled from "styled-components";
import courseData from "./../courseData.json";
// import database from "../assets/database.svg";

const steps = [
  { id: 1, step: "Register and verify your mail" },
  { id: 2, step: "Sign up to get started" },
  { id: 3, step: "Make a one time payment plan" },
  { id: 4, step: "Select a course and start learning" },
  {
    id: 5,
    step: "Complete all lessons and tasks to download certificate",
  },
];

const Courses = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Caption>
              <div>Courses</div>
              <p>
                Looking to break into tech, Get access to 5 high demand courses
                for the duration of 16weeks
              </p>
            </Caption>
            <TimeLine>
              <StepsWrap>
                {steps.map(({ step, id }) => (
                  <Steps key={id}>
                    <span>{id}</span>
                    <p>{step}</p>
                  </Steps>
                ))}
              </StepsWrap>
            </TimeLine>
          </Top>
          <Bottom>
            <CardWrapper>
              {courseData.map((props, i) => (
                <Card key={i}>
                  <Image src={props.image} alt="database" />

                  <Title>{props.title}</Title>
                  <Description>{props.description}</Description>
                  <Register>Register</Register>
                </Card>
              ))}
            </CardWrapper>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Courses;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: calc(100% - 240px);
`;
const Top = styled.div`
  height: 280px;
  width: 100%;
`;
const Caption = styled.div`
  div {
    font-weight: 700;
    font-size: 40px;
    color: #f39712;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    margin-top: 15px;
    line-height: 28px;
    letter-spacing: 1px;
  }
`;

const TimeLine = styled.div`
  width: 100%;
  height: 182px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StepsWrap = styled.div`
  width: 100%;
  display: flex;
`;
const Steps = styled.div`
  width: 232px;
  height: 170px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  margin-top: 20px;
  span {
    margin: 25px 0 30px 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #f39712;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  p {
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
  }
`;
const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 30px 0;
`;
const Card = styled.div`
  width: 345px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 24px 22px;
  margin: 10px;
`;

const Image = styled.img`
  width: 150px;
  height: 125px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  margin-top: 10px;
`;
const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 15px;
  text-align: left;
  margin-bottom: 15px;
`;
const Register = styled.div`
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
const Bottom = styled.div``;
