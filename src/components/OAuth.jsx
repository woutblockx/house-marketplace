import {useLocation, useNavigate} from 'react-router-dom'
import {getAuth, SignInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import GoogleIcon from '../assets/svg/googleIcon.svg'
import { signInWithPopup } from 'firebase/auth'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(), 
                })
            }
            navigate('/')

        } catch (error) {
            toast.error('Could not authorize with Google')
        }
    }

  return <div className="socialLogin">
    <p>Sign {Location.pathname === '/sign-up' ?'up' : 'in'} with </p>
    <button onClick={onGoogleClick} className="socialIconDiv">
        <img className='socialIconImg' src={GoogleIcon} alt="google" />
    </button>
  </div>
}

export default OAuth
