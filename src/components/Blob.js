import React from 'react';
import styled, { keyframes } from 'styled-components';

const changeColors = keyframes`
  0% {
    fill: #8131FF;
  }
  25% {
    fill: #50C5B7;
  }
  50% {
    fill: #50C5B7;
  }
  75% {
    fill: #EF5A4C;
  }
  100% {
    fill: #009FFF;
  }
`;

const organicMovement = keyframes`
  0%   { transform: scale(1)   translate(10px, -30px); }
  38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  100% { transform: scale(1)   translate(10px, -30px); }
`;

const SVG = styled.svg`
  animation-name: ${organicMovement}, ${changeColors};
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  position: absolute;
  top: 0;
  left: 0;
  width: 50vmax;
  z-index: -1;
  transform-origin: 50% 50%;
  &:hover {
    animation-play-state: paused;
  }
`;

const Blob = () => (
  <SVG
    width="600"
    height="600"
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(300,300)">
      <path d="M132.3,-195.5C173.4,-179.4,209.9,-146,207.4,-107.6C204.9,-69.2,163.3,-25.9,150.3,17.2C137.3,60.3,152.9,103.2,143.8,138.3C134.7,173.5,100.9,200.9,63.1,209.7C25.3,218.4,-16.5,208.5,-47,187.2C-77.4,165.8,-96.5,133,-115.3,104C-134.2,75,-152.7,49.8,-161.8,20.2C-170.9,-9.5,-170.5,-43.6,-168.6,-89.2C-166.7,-134.8,-163.4,-191.9,-135,-213.8C-106.7,-235.7,-53.3,-222.3,-3.9,-216.3C45.6,-210.3,91.2,-211.6,132.3,-195.5Z" fill="#8131ff" />
    </g>
  </SVG>
);

export default Blob;