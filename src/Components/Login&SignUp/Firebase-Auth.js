import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAGPQ-jHpw2F6ojTXea1rwWcqjvyYiObzE",
  authDomain: "tokyo-amphora-402014.firebaseapp.com",
  projectId: "tokyo-amphora-402014",
  storageBucket: "tokyo-amphora-402014.appspot.com",
  messagingSenderId: "761933971122",
  appId: "1:761933971122:web:42d81f5c78cb87423493ab",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (navigate) => {
  try {
    // Ask the user to select which account for signing in
    provider.setCustomParameters({ prompt: "select_account" });

    const result = await signInWithPopup(auth, provider);
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

    // Navigate to "/home" after setting local storage data
    navigate("/home");
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.clear();
    console.log("Signed out successfully");
  } catch (error) {
    console.error("Sign-out error:", error);
  }
};

