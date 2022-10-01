import { getAuth, updateProfile } from "firebase/auth"
import {updateDoc, doc} from "firebase/firestore"
import {db} from "../firebase.config"
import { useEffect, useState } from "react"
import { useNavigate , Link } from "react-router-dom"
import {toast} from "react-toastify"


const Profile = () => {
  const auth = getAuth()

  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const onSubmit = async () =>{
   try {
    if(auth.currentUser.displayName !== name) {
      // Updated Display name in FB 
      await updateProfile(auth.currentUser, {
        displayName: name
      })
      //Update in fireStore
      const userRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(userRef, {
        name
      })

    }
   } catch (error) {
      toast.error("could not update profile details")
   }
  }
  const onChange = (e) =>{
    setFormData((prevState) =>{
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }

  const {name, email} = formData

  const navigate = useNavigate()

 const onLogout = () =>{
  auth.signOut()
  navigate("/")
 }

  return <div className="profile">

    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button className="logOut"
        type="button"
        onClick={onLogout}
      >LogOut</button>
    </header>
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">Personal Details</p>
        <p className="changePersonalDetails" onClick={()=> {
          changeDetails && onSubmit()
          setChangeDetails((prevState) => !prevState)
        }}>
          {changeDetails ? "done" : "change"}
        </p>
      </div>
      <div className="profileCard">
        <input type="text" id="name" 
          className={!changeDetails ? "profileName" : "profileNameActive"}
          disabled = {!changeDetails}
          value={name}
          onChange={onChange}
        />
        <input type="text" id="email" 
          className={!changeDetails ? "profileEmail" : "profileEmailActive"}
          disabled = {!changeDetails}
          value={email}
          onChange={onChange}
        />
      </div>
    </main>
  </div>
}

export default Profile