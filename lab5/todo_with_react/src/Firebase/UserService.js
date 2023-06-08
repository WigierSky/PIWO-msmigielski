import { auth } from "./init"

import { 
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
}from "firebase/auth"
import { useState, useEffect} from "react";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const logInWithGoogle = async () => {
    try{
        await signInWithPopup(auth, googleProvider);
    }catch (err){
        console.error({err});
        alert(err.mesage);
    }
};

export const logInWithGitHub = async () => {
    try{
        await signInWithPopup(auth, githubProvider);
    }catch (err){
        console.error({err});
        alert(err.mesage);
    }
}

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe =
            auth.onAuthStateChanged((user) => {
                setUser(user);
            });
        return () => unsubscribe();
    }, []);
    return user;
};

export const logout = () => signOut(auth);