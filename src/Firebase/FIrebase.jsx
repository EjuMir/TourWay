import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider } from "firebase/auth";
import { app } from "./firebase.config";


export const AuthFirebase = createContext(null);

const Firebase = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const githubUser = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        localStorage.clear();
        return signOut(auth);
    }

    
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           setLoading(false);
        });
        return ()=>{
           unSubscribe();
           
        }
    }, [])

    const authInfo = {user, setUser, createUser, loginUser, googleUser, githubUser, logOut, loading}
    return (
        <AuthFirebase.Provider value={authInfo}>
            {children}
        </AuthFirebase.Provider>
    );
};

export default Firebase;