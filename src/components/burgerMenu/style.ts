import styled from "styled-components";
import tw from "twin.macro";

const Style = styled.div`
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .hamRotate.active {
    transform: rotate(45deg);
  }

  .hamRotate180.active {
    transform: rotate(180deg);
  }

  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#F8F2F2;
    stroke-width:5.5;
    stroke-linecap:round;
  }

  .ham1 .top {
    stroke-dasharray: 40 139;
  }

  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }

  ${({ isActive } : { isActive : boolean}) => isActive && `
     .ham1 .top {
      stroke-dasharray: 40 139;
      stroke-dashoffset: -98px;
    }
    .ham1 .bottom {
     stroke-dasharray: 40 180;
      stroke-dashoffset: -138px;
    }
  `}

  `;

  export default Style;