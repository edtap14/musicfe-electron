import {
	getAuth,
	updateProfile,
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
	updatePassword
} from 'firebase/auth'

export class User {
  getMe () {
    return getAuth().currentUser
  }

  async updateAvatarUser (url) {
    try {
      const auth = getAuth()
      await updateProfile(auth.currentUser, {
        photoURL: url
      })
    } catch (error) {
      console.lof(error)
    }
  }
  async updateDisplayName (displayName) {
    try {
      const auth = getAuth()
      await updateProfile(auth.currentUser, { displayName })
    } catch (err) {
      console.log(err)
    }
  }

  async updateUserEmail (newEmail, password) {
    try {
      const auth = getAuth()
      const email = auth.currentUser.email

      const credentials = EmailAuthProvider.credential(email, password)
      await reauthenticateWithCredential(auth.currentUser, credentials)
      await updateEmail(auth.currentUser, newEmail)
    } catch (error) {
      console.log(error)
    }
  }

  async updateUserPassword (password, newPassword) {
    try {
      const auth = getAuth()
      const email = auth.currentUser.email

      const credential = EmailAuthProvider.credential(email, password)
      await reauthenticateWithCredential(auth.currentUser, credential)
      await updatePassword(auth.currentUser, newPassword)
    } catch (error) {
      console.log(error)
    }
  }
}
