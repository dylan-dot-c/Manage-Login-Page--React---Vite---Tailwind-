import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

function links(list) {
    const res = list.map( (link, index) => {

        return (
            <li key={index}>
                <p className="text-white/80 hover:text-bright-red cursor-pointer">
                {link}
                </p>
            </li>
        )
    })

        return res
    }

export default function Footer() {

    const images = [<i className="fa-brands fa-facebook"></i>, <i class="fa-brands fa-instagram"></i>,<i class="fa-brands fa-twitter"></i>, <i class="fa-brands fa-pinterest"></i>, <i class="fa-brands fa-instagram"></i>]

    const socialIcons = images.map( (image, index) => {

        return (
            <span>
                {image}

            </span>            
        )
    })

    const navLinks = ["Home", "Pricing", "Products", "About Us"]
    const navLinks2 = ["Careers", "Community", "Privacy Policy"]

    const res = links(navLinks)
    const res2 = links(navLinks2)

    return (
        <footer className="bg-very-dark-blue text-white py-12 px-6">
            <div className="container mx-auto flex justify-between flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-between order-5 w-full md:w-auto">
                    <img src="/images/logo-white.svg" alt="Manage Logo" className="order-4 mx-auto mt-4" width="200px" />

                    <div className="flex space-x-6 order-1 justify-between px-4">
                        {socialIcons}
                    </div>
                

                </div>

                <div className="flex px-4 justify-between order-3 ">
                <div className="order-2">
                    <ul className="space-y-6">
                        {res}
                    </ul>
                </div>
                <div className="order-3">
                    <ul className="space-y-6">
                        {res2}
                    </ul>
                </div>
                </div>

                <div className="flex justify-between flex-col order-0">

                    <form action="" className="flex gap-4 order-9 justify-between">

                        
                            <input 
                            className="outline-none border-none py-4 inline px-4 bg-white text-bright-red w-4/5 rounded-full"
                            type="email"
                            placeholder="Updates in your inbox"
                            required={true}
                            />

                            <button className="btn-primary rounded-full ">Go</button>
                        

                    </form>

                    <p className="text-sm text-right hidden">Copyright 2022. All rights reserved</p>

                </div>
            </div>
        </footer>
    )

}