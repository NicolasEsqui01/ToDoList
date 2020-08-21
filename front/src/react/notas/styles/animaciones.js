import { keyframes } from "styled-components";

const shadow_Drop = keyframes`{
    0% {
      -webkit-transform: translateZ(0) translateX(0) translateY(0);
              transform: translateZ(0) translateX(0) translateY(0);
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-transform: translateZ(50px) translateX(12px) translateY(12px);
              transform: translateZ(50px) translateX(12px) translateY(12px);
      -webkit-box-shadow: -12px -12px 20px -12px rgba(0, 0, 0, 0.35);
              box-shadow: -12px -12px 20px -12px rgba(0, 0, 0, 0.35);
    }
}`;

const slide_fwd = keyframes`{
        0% {
                -webkit-transform: translateZ(0);
                        transform: translateZ(0);
        }
        100% {
                -webkit-transform: translateZ(160px);
                        transform: translateZ(160px);
        }
}`;

const tracking_in = keyframes`{
        0% {
          letter-spacing: 1em;
          -webkit-transform: translateZ(400px);
                  transform: translateZ(400px);
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          -webkit-transform: translateZ(0);
                  transform: translateZ(0);
          opacity: 1;
        }
}`;



export { shadow_Drop, slide_fwd , tracking_in };
