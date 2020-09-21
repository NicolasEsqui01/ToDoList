import { keyframes } from "styled-components";

const scale_up = keyframes`
{
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}`;

export { scale_up };
