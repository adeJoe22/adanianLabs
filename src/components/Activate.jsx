import React from "react";
import styled from "styled-components";

const Activate = () => {
  return (
    <Container>
      <Wrapper>
        <Activation>Activate your skill set</Activation>
        <Mission>
          Our missionis to support and build 300 impact-driven commercially
          viable tech companies in Africa by 2025. To do this, we need a huge
          volume of highly skilled and tested developers.
        </Mission>
        <Vision>
          Our vision, Adanian Labs Software Developers Training initiative is a
          strategic partnership with leaders in the industry to ensure that our
          mission is achieved expeditiously.
        </Vision>
      </Wrapper>
    </Container>
  );
};

export default Activate;

const Container = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Activation = styled.div`
  font-weight: 500;
  font-size: 48px;
  color: #f39712;
`;
const Mission = styled.div`
  width: 800px;
  text-align: center;
  margin-top: 25px;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  line-height: 28px;
  letter-spacing: 1px;
`;
const Vision = styled(Mission)``;
