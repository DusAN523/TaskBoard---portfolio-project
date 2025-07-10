
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactNode } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/signin" />;

  return children;
};

export default AuthGuard;
