// import AuthContext from 'app/contexts/JWTAuthContext';
// import AuthContext from "app/contexts/Auth0Context";

const initialAuthState = {
  user: { name: "", avatar: "", id: 1 },
  isInitialised: false,
  isAuthenticated: false,
};

const useAuth = () => {
  return () => ({
    ...initialAuthState,
    method: "FIREBASE",
  });
};

export default useAuth;
