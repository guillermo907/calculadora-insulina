import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled(motion.div)`
  .footer {
    position: fixed;
    bottom: 0;
    left: 0%;
    display: flex;
    background: linear-gradient(
      to right,
      coral,
      crimson,
      blueviolet,
      orange,
      blueviolet,
      crimson
    );

    width: 100%;
    height: 9px;
  }

  .moveBg {
    animation: moveGradient 8s ease-in-out infinite;

    @keyframes moveGradient {
      0% {
        background-position: 0% 50%;
        background-size: 190%;
      }
      25% {
        background-position: 50% 50%;
        background-size: 230%;
      }
      50% {
        background-position: 100% 50%;
        background-size: 250%;
      }
      75% {
        ackground-position: 300% 50%;
        background-size: 250%;
      }
      100% {
        background-position: 0% 50%;
        background-size: 200%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="moveBg">
      <div className="footer moveBg">
        <p></p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
