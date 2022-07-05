import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Components/firebase/firebase.init";
firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // console.log(user)
    // google login
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    // google logout
    const signOutGoogle = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({})
            })
    }
    // observe the user log state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [auth])
    return {
        user,
        signOutGoogle,
        signInGoogle
    };
};

export default useFirebase;