import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword
} from 'firebase/auth'

export class Auth {
  async register (email, password) {
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  async logout () {
    try {
      const auth = getAuth()
      await signOut(auth)
    } catch (err) {
      console.log(err)
    }
  }

  async login (email, password) {
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }
}
