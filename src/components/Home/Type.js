import React from "react";
import Typewriter from "typewriter-effect";
import i18n from "../../i18";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Full-Stack",
          
          i18n.t('typeFrase')
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
