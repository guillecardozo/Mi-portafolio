import React from "react";

const defaultValue = {
  locale: 'es',
  lng: 'es',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);