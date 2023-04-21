import { useState, useEffect } from "react"

export default function Navbar() {

    // state to check if we should show the navbar
    const [navOpen, setNavOpen] = useState(false)

    const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

    useEffect( () => {
        
        if(navOpen) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "unset"
        }

    }, [navOpen])

    const links = navLinks.map( (link, index) => {
        return (
            <li key={index} className="inline text-md hover:text-greyish-blue hover:cursor-pointer">
                {link}
            </li>
        )
    })

    const openNav = function() {
        setNavOpen(!navOpen)
    }

    return (
        <nav className="container mx-auto flex justify-between items-center p-5  md:p-8">
            <img src="/images/logo.svg" width="150px" alt="Manage Logo" />
            <ul className="md:block hidden space-x-8">
                {links}
            </ul>
            <button className="bg-bright-red px-4 py-3 text-white rounded-3xl baseline hidden md:block hover:opacity-50 hover:drop-shadow-lg">
                Get Started
            </button>

            {
                navOpen ?

                    <img src="/images/icon-close.svg" alt=""
                    onClick={openNav}
                    className="md:hidden block"/>   
                :
                    <img src="/images/icon-hamburger.svg" alt=""
                    onClick={openNav}
                    className="md:hidden block"/>
                
        
            }



            <div 
                className={`mobile-navbar ${navOpen ? "flex": "hidden"}`}>
                    {links}
            </div>

        </nav>
    )
}