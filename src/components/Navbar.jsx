

export default function Navbar() {

    const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

    const links = navLinks.map( (link, index) => {
        return (
            <li key={index} className="inline text-md hover:text-greyish-blue hover:cursor-pointer">
                {link}
            </li>
        )
    })

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

            <img src="/images/icon-hamburger.svg" alt=""
                className="md:hidden block"
            />

            <div className="mobile-navbar">
                
                    {links}
                
            </div>

        </nav>
    )
}