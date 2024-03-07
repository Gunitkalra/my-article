import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {Link, useLocation} from 'react-router-dom'
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
export default function DashSidebar() {
  const location=useLocation()
  const [tab, setTab]=useState('')
  useEffect(()=>{
    const urlParams= new URLSearchParams(location.search)
    const tabFormUrl=urlParams.get('tab')
    if(tabFormUrl){
        setTab(tabFormUrl)
    }
  },[location.search])
    return (
    <div>
    <Sidebar className=' min-h-screen w-full md:w-56'>
<Sidebar.Items>
<Sidebar.ItemGroup>
    <Link to='/dashboard?tab=profile'>
        <Sidebar.Item active={tab==='profile'} label={'user'} labelcolor='dark' icon={HiUser} as='div'> 
         profile 
        </Sidebar.Item>
    </Link>
        <Sidebar.Item className='cursor-pointer' icon={HiArrowSmRight}> 
         Sign Out
        </Sidebar.Item>
</Sidebar.ItemGroup>
</Sidebar.Items>

    </Sidebar>
    </div>
  )
}


