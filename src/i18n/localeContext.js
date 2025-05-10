import React, { createContext, useState, useContext } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {

  const savedLocale = localStorage.getItem("locale") || "en";
  const [locale, setLocale] = useState(savedLocale); 

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);