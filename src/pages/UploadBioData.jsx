import React from "react";
import Background from "../ui/background";
import styled from "styled-components";

const UploadBioData = () => {
  return (
    <>
      <Background>
        <FormCard>
          <Title></Title>
        </FormCard>
      </Background>
    </>
  );
};

export default UploadBioData;

const FormCard = styled.form`
  width: 894px;
  padding: 60px 32px;
  margin: 100px 0;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div``;
