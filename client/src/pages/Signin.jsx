import React, { useState } from 'react'
import {Alert, Button,Label,Spinner,TextInput}from 'flowbite-react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'
function SignIn() {
  const Navigate= useNavigate()
  const[loading,setLoading]=useState(false)
  const[errorMessage,seterrorMessage]=useState(null)
  const [formData,setFormData]=useState({})
  const handleChange=(e)=>{
setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }
  console.log(formData)
   const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!formData.username||!formData.email||!formData.password){
      return seterrorMessage("all feilds are required")
    }
   try {
    seterrorMessage(null)
    setLoading(true)
     const res=await fetch('/api/auth/signup',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
    console.log(res)
    const data=await res. json()
    if(data.sucess=== false){
      return seterrorMessage(data.message)
    }
    setLoading(false)
    if (res.ok){
      Navigate('/login')
    }
   } catch (error) {
    seterrorMessage(error.message)
    setLoading(false)
   }
   }
  return (
  
    <div className='mt-20 min-h-screen'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

      <div className=''>
      <Link to='/' className='font-bold text-4xl dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white'>Gunit</span> Blog
    </Link>
    <p className='text-sm mt-5'>This is a demo project .You can signin with your Email or Google</p>
      </div>

      <div className='flex-1'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div >
              <Label value='Your UserName'/>
              <TextInput type='text' placeholder='userName' id='username' onChange={handleChange}/>
          </div>
          <div>
              <Label value='Your Email'/>
              <TextInput type='email' placeholder='Email'id='email' onChange={handleChange}/>
          </div>
          <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='password' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading} className='mt-3'>
            {loading?(
            <>
            <Spinner size='sm'/>
            <span className='pl-3'>loading</span>
            </>
            ):(
               "sign up"
            )}
           
          </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span> Have an account?</span>
          <Link to='/login' className='text-blue-500'>login</Link>
        </div>
        {errorMessage&&(
          <Alert className='mt-5'color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>


      </div>

    </div>
  )
}

export default SignIn