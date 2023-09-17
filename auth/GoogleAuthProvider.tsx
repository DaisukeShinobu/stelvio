import { auth } from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      const uid = auth.currentUser.uid;
      const userRef = doc(collection(db, 'user'), uid);
      setDoc(userRef, {
        likePostCount: 0
      });
    })
    .catch((error) => {
      console.log(error.message);
    });

  return (
    <div>
      <button onClick={signInWithGoogle}>Googleでログイン</button>
    </div>
  );
};
