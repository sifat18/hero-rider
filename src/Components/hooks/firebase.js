import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Firebase/firebase.init";
// signInWithPopup,GoogleAuthProvider
initFirebase();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState('')
    const [admin, setAdmin] = useState(false);

    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();

    // create user
    const createUser = (name, email, password, navigate) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('');
                const newUser = { email, displayName: name };
                setuser(newUser);
                saveUser(email, name, 'POST');
                setName(name)
                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                seterror(error.message);
                // ..
            }).finally(() => {
                setisLoading(false)
            });
    };

    // updateProfile
    const setName = (name) => {
        setisLoading(true)

        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }

    // pass sign in
    const emailPass = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('')
                setuser(userCredential.user);
                const destination = location?.state?.from || '/dashboard';
                history(destination);
                // ...
            })
            .catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }
    // authchange
    useEffect(() => {
        setisLoading(true)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setuser(user);
                // ...
            } else {
                // User is signed out
                // ...
                setuser({})
            }
            setisLoading(false)

        });
    }, [auth])


    useEffect(() => {
        fetch(`https://hidden-reef-13109.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // signoUT
    const logOut = () => {
        setisLoading(true)

        signOut(auth).then(() => {
            setuser({})
            setisLoading(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    const saveUser = (email, displayName, method) => {
        const userData = { email, displayName };
        fetch('https://hidden-reef-13109.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
    }
    return {
        user,
        isLoading,
        setisLoading,
        createUser,
        emailPass,
        error,
        logOut,
        // signGoogle,
        seterror,
        admin
    }

}
export default useFirebase;