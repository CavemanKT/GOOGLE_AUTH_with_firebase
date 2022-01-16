import axios from 'axios'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

// Inside AuthProvider
const provider = new GoogleAuthProvider()

export default function useAuth() {
  const [userId, setUserId] = useState(null)
  const [credentials, setCredentials] = useState(null)

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const { user } = result
        console.log({ credential, token, user, result })
        setCredentials(credential.accessToken)
        setUserId(user.id)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const { email } = error
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log({ errorCode, errorMessage, email, credential })
      })
  }

  const googleLogout = () => {
    auth.signOut()
    setCredentials(null)

    console.log('googleLogout')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user
        console.log({ uid })
        setUserId(uid)
      } else {
        console.log('no user')
        setUserId(null)
        setCredentials(null)
      }
    })
  }, [])

  return {
    googleLogin,
    googleLogout,
    userId,
    credentials
  }
}
