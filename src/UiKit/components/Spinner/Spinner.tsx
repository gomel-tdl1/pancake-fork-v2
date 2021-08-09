import React from "react";
import styled, { keyframes } from "styled-components";
import PancakeIcon from "./SpinnerIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Container = styled.div`
  position: relative;
`;
// const spin = keyframes`
//   0% { transform: rotate(0); }
//   100% { transform: rotate(360deg); }
// `
// const SpinnerWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform: translate(-50%, -50%);
//   .ldio-94rmszifnmu > div {
//     position: absolute;
//     width: 12px;
//     height: 12px;
//     animation: ${spin} 1.1764705882352942s cubic-bezier(0.5,0,0.5,1) infinite;
//     transform-origin: 100px 100px;
//   }
//   .ldio-94rmszifnmu > div > div {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//   }
//   .ldio-94rmszifnmu div:nth-child(0) {
//     animation-delay: 0s;
//   }
//   .ldio-94rmszifnmu div:nth-child(0) > div {
//     background: #e15b64;
//     transform: translate(143.18790709805657px,131.7432085985407px);
//   }
//   .ldio-94rmszifnmu div:nth-child(1) {
//     animation-delay: -0.062s;
//   }
//   .ldio-94rmszifnmu div:nth-child(1) > div {
//     background: #f47e60;
//     transform: translate(131.7432085985407px,143.18790709805657px);
//   }
//   .ldio-94rmszifnmu div:nth-child(2) {
//     animation-delay: -0.125s;
//   }
//   .ldio-94rmszifnmu div:nth-child(2) > div {
//     background: #f8b26a;
//     transform: translate(117.72637280663557px,151.28053101569978px);
//   }
//   .ldio-94rmszifnmu div:nth-child(3) {
//     animation-delay: -0.187s;
//   }
//   .ldio-94rmszifnmu div:nth-child(3) > div {
//     background: #abbd81;
//     transform: translate(102.09262391764321px,155.46958140517626px);
//   }
//   .ldio-94rmszifnmu div:nth-child(4) {
//     animation-delay: -0.25s;
//   }
//   .ldio-94rmszifnmu div:nth-child(4) > div {
//     background: #849b87;
//     transform: translate(85.9073760823568px,155.46958140517626px);
//   }
//   .ldio-94rmszifnmu div:nth-child(5) {
//     animation-delay: -0.312s;
//   }
//   .ldio-94rmszifnmu div:nth-child(5) > div {
//     background: #6492ac;
//     transform: translate(70.27362719336445px,151.28053101569978px);
//   }
//   .ldio-94rmszifnmu div:nth-child(6) {
//     animation-delay: -0.375s;
//   }
//   .ldio-94rmszifnmu div:nth-child(6) > div {
//     background: #637cb5;
//     transform: translate(56.25679140145932px,143.18790709805657px);
//   }
//   .ldio-94rmszifnmu div:nth-child(7) {
//     animation-delay: -0.437s;
//   }
//   .ldio-94rmszifnmu div:nth-child(7) > div {
//     background: #6a63b6;
//     transform: translate(44.81209290194343px,131.7432085985407px);
//   }
//   .loadingio-spinner-rosary-u0w0g6fcmh {
//     width: 200px;
//     height: 200px;
//     display: inline-block;
//     overflow: hidden;
//     background: none;
//   }
//   .ldio-94rmszifnmu {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     transform: translateZ(0) scale(1);
//     backface-visibility: hidden;
//     transform-origin: 0 0; /* see note above */
//   }
//   .ldio-94rmszifnmu div { box-sizing: content-box; }
// `


const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
       <RotatingPancakeIcon width={`${size * 0.5}px`} />
      {/* <SpinnerWrapper> */}
      {/*  <div className="ldio-94rmszifnmu"> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      <div /> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </SpinnerWrapper> */}
    </Container>
  );
};

export default Spinner;
