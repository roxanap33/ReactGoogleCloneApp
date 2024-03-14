import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { Avatar, Tooltip } from "@mui/material";
import { SignInButton, SignOutButton } from "../assets/styles/HomeStyles";

export default function Authenticate() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const name: any = result.user.displayName;
        const email: any = result.user.email;
        const profilePicture: any = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);

        setIsSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutFromGoogle = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        window.location.reload();
        console.log("Local storage cleared");
        setIsSignedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Tooltip title="Google Account">
        {isSignedIn ? (
          <>
            <Tooltip title={localStorage.getItem("name")}>
              <Avatar
                src={localStorage.getItem("profilePicture")!}
                sx={{
                  marginTop: "5px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  color: "#ffffff",
                  backgroundColor: "#8ab4f8",
                }}
              ></Avatar>
            </Tooltip>
            <Tooltip title="Sign Out">
              <SignOutButton>
                <button
                  style={{
                    marginTop: "9px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={signOutFromGoogle}
                >
                  Sign Out
                </button>
              </SignOutButton>
            </Tooltip>
          </>
        ) : (
          <SignInButton>
            <button onClick={signInWithGoogle}>Sign In</button>
          </SignInButton>
        )}
      </Tooltip>
    </>
  );
}
