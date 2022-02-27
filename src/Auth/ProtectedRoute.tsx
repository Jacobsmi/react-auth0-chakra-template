import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import LoadingPage from "../Components/LoadingPage";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LoadingPage />,
  });

  return <Component />;
};

export default ProtectedRoute;
