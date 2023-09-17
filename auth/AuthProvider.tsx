import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({ currentUser: undefined });

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
