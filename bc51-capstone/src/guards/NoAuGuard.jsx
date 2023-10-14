import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function NoAuGuard(props) {
  const navigate = useNavigate();
  const useState = useSelector((state)=>state.userReducer)
  useEffect(() => {
    if (useState.userInfo){
      navigate('/')
    }
  } , [])
 
  return <>{props.children}</>
}