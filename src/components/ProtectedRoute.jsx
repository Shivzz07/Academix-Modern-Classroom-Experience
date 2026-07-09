import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useContext(AuthContext);
  const { sessionId } = useParams();

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (!user.login) return <Navigate to="/login" replace />;
  if (allowedRole && user.role !== allowedRole) return <Navigate to="/login" replace />;

  const storedId = sessionStorage.getItem("sessionId");
  if (sessionId !== storedId) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;