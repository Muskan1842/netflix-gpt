import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const AppContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // signOut(auth).then(() => { console.log('user signed out') })
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default AppContent;