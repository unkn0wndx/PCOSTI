import { handleSignIn } from "../hooks/handleSignIn";
import { GoogleLogin } from '@react-oauth/google';

export const LoginButton = () => {

  const { SignIn } = handleSignIn()

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} className="mb-4">
      <GoogleLogin
        /* onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }} */
        onSuccess={SignIn}
        onError={() => {
          console.log('Login Failed');
        }}
        theme="filled_black"
        text="continue_with"
        useOneTap={true}
      />
    </div>
  )
}
