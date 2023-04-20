import { useState, useEffect } from "react"

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)
    const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

    const links = navLinks.map( (link, index) => {
        return (
            <li key={index} className="inline text-md hover:text-greyish-blue hover:cursor-pointer">
                {link}
            </li>
        )
    })

    useEffect( () => {
        
        if(navOpen) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "unset"
        }

    }, [navOpen])

    const openNav = function() {
        setNavOpen(!navOpen)
    }

    return (
        <nav className="container mx-auto flex justify-between items-center  p-8">
            <img src="/images/logo.svg" width="200px" alt="Manage Logo" />
            <ul className="md:block hidden space-x-8">
                {links}
            </ul>
            <button className="bg-bright-red px-4 py-3 text-white rounded-3xl baseline hidden md:block hover:opacity-50 hover:drop-shadow-lg">
                Get Started
            </button>

            {/* Hamburgurer menu */}

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



            <div className={`mobile-navbar ${navOpen ? "flex": "hidden"}`}>
                
                    {links}
                
            </div>

        </nav>
    )
}