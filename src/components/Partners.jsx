import React from "react";
import styled from "styled-components";
import paylend from "../assets/paylend.png";
import cobba from "../assets/Cobba.png";
import moovebeta from "../assets/mooveBeta.png";
import rewardAdz from "../assets/rewardAdz.png";

const logos = [
  { src: paylend, alt: "Paylend" },
  { src: cobba, alt: "CoBba" },
  { src: moovebeta, alt: "mooveBeta" },
  { src: rewardAdz, alt: "RewardAdz" },
];

const Partners = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            <div>Partners</div>
            <p>
              To build and enhance the market, we initiated strategic
              partnership
            </p>
          </Title>
          <PartnerWrap>
            {logos.map(({ alt, src }) => (
              <Logo key={alt}>
                <img src={src} alt={alt} />
              </Logo>
            ))}
          </PartnerWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Partners;

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: calc(100% - 240px);
`;
const Title = styled.div`
  margin-top: 30px;
  div {
    font-weight: 700;
    font-size: 40px;
    color: #f39712;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    margin-top: 15px;
    line-height: 28px;
    letter-spacing: 1px;
  }
`;

const PartnerWrap = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 50px;

  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
