import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'


const SignIn = () => {
  const [showPassword, setShowShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password:""
  })

  const {email, password} = formData

  const navigate = useNavigate()

  return (
    <>
      <div className="pageConatiner">
        <header>
          <p className="pageHeader">
            Welcome Back!  
          </p>
        </header>
      </div>
    </>

  )
}

export default SignIn