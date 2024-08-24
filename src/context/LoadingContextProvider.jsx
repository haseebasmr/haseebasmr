import { createContext, useState, useEffect } from "react";

const LoadingContext = createContext({});

export default function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext };
