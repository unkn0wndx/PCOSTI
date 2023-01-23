import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { NextUIProvider } from "@nextui-org/react";

export const App = () => {
  return (
    <>
      <NextUIProvider>
        {/* <AuthProvider> */}
        <AppRouter />
        {/* </AuthProvider> */}
      </NextUIProvider>
    </>
  )
}
