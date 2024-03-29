import { Avatar, Button, Dropdown,  DropdownHeader, DropdownItem, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon,FaSun} from "react-icons/fa"
import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
function Header() {
 const {currentUser}= useSelector((s)=>s.user)
  const path =useLocation().pathname
const dispatch=useDispatch()
const {theme}=useSelector((state)=>state.theme)
  return (
   <Navbar className='border-b-2 py-2'>

    <Link to='/' className='self-center whitespace-nowrap text-md font-semibold dark:text-white sm:text-xl'>
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white'>Gunit's</span> Blog
        </Link>
      <form>
        <TextInput type='text' placeholder='search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        
      </form>
      <Button className='lg:hidden w-12 h-10'color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className='flex gap-2 md:order-2'>
       <Button className='w-12 h-10 sm:inline hidden' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
     {theme==="light" ?<FaMoon/> :<FaSun/>}   
       </Button>
     {currentUser?(

       <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
        <DropdownHeader>
          <span>@{currentUser.username}</span>
          <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
        
        <Link to={'/dashboard?tab=profile'}>
          <DropdownItem>profile</DropdownItem>
        </Link>
        <Dropdown.Divider/>
          <DropdownItem> sign out</DropdownItem>
        
        </DropdownHeader>
       </Dropdown>
       )
     
     :(
      <Link to='/register'>  <Button gradientDuoTone='purpleToBlue'>Register</Button></Link>
     )}
     <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
        <Navbar.Link active={path==='/'} as={'div'} >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/projects'} as={'div'} >
          <Link to='/projects'>Project</Link>
        </Navbar.Link>
       </Navbar.Collapse>
   </Navbar>
  )
}

export default Header
