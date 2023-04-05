import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import appLogo from "../resources/app-logo2.png";
import Settings from "./Settings";

const GlucoseContainer = styled(motion.div)`
  .glucose-input-group img {
  }
  .info-logo {
    width: 30px;
  }
  .app-logo-glucose {
    width: 100px;
    padding-bottom: 10px;
    filter: invert(1);
    opacity: 0.6;
  }
  .disabled {
    opacity: 0.5;
  }
  .field {
    display: flex;
    align-items: center;
    justify-content: end;

    input {
      padding: 12px 5px;
    }
  }
`;

const Glucose = ({ user }) => {
  return (
    <GlucoseContainer
      className={`glucose-input-container disabled`}
      animate={{ opacity: 0.6, y: 0 }}
      initial={{ opacity: 0, y: -25 }}
      exit={{ y: -25, opacity: 0 }}
    >
      <div className={`flex-column glucose-input-group `}>
        <div className="field">
          <label>Glucosa actual</label>
          <input placeholder="100"></input>
        </div>
        <div className="field">
          <img className="app-logo-glucose" src={appLogo} />
        </div>
        <div className="field">
          <label>Ingrese su RIC</label>
          <input placeholder={user.RIC}></input>
        </div>
        <div className="field">
          <label>Sensibilidad</label>
          <input placeholder={user.sensibilidad}></input>
        </div>
      </div>
    </GlucoseContainer>
  );
};

export default Glucose;
