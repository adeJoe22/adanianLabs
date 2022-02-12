import React from "react";
import styled from "styled-components";
import Activate from "./Activate";
import Courses from "./Courses";
const SectionTwo = () => {
  return (
    <Container>
      <Wrapper>
        <Activate />
        <Courses />
      </Wrapper>
    </Container>
  );
};

export default SectionTwo;
const Container = styled.div`
  width: 100%;
  height: 1622px;
  background-color: #13a8be;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
