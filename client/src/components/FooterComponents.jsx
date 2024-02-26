import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterTitle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import{BsFacebook,BsInstagram,BsTwitter,BsGithub}from 'react-icons/bs'
export default function FooterComponents() {
  return (
    <Footer className='border border-t-8 border-teal-700'>
<div className='w-full max-w-7xl max-auto'>
    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
       <div className='mt-5'>
     <Link to='/' className='font-bold text-4xl dark:text-white'>
     <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white'>Gunit's</span> Blog
    </Link>
       </div>
      <div className='grid grid-cols-3 gap-8 mt-4 sm:grid-cols sm:gap-6'>
        <div>
            <FooterTitle title='about'/>
            <Footer.LinkGroup col >
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                    project link
                 </FooterLink>
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                    guni"s blog
                 </FooterLink>
            </Footer.LinkGroup>
        </div>
        <div>
            <FooterTitle title='Follow us'/>
            <Footer.LinkGroup col >
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                  git hub
                 </FooterLink>
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                    discord
                 </FooterLink>
            </Footer.LinkGroup>
        </div>
        <div>
            <FooterTitle title='leagle'/>
            <Footer.LinkGroup col >
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                    privacy policy
                 </FooterLink>
                 <FooterLink 
                 href='http://github.com'
                 target='_blank'
                 rel='noopener noreferrer'>
                  
                    terms&Condition
                 </FooterLink>
            </Footer.LinkGroup>
        </div>
      </div>
    </div>
<FooterDivider/>
  <div className='w-full sm:flex sm:items-center sm:justify-between'>
    <FooterCopyright
    href='#'
    by='gunit kalra'
    year={new Date().getFullYear()}/>
    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center '>
      <FooterIcon href='#' icon={ BsFacebook}/>
      <FooterIcon href='#' icon={ BsInstagram}/>
      <FooterIcon href='#' icon={ BsTwitter}/>
      <FooterIcon href='#' icon={ BsGithub}/>
    </div>
  </div>

</div>
    </Footer>
  )
}


