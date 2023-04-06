
function links(list) {
    const res = list.map( (link, index) => {

        return (
            <li key={index}>
                <p className="hover:text-white cursor-pointer">
                {link}
                </p>
            </li>
        )
    })

        return res
    }

export default function Footer() {

    const images = ["icon-facebook.svg", "icon-instagram.svg", "icon-pinterest.svg", "icon-twitter.svg", "icon-youtube.svg"]

    const socialIcons = images.map( (image, index) => {

        return (
            <img src={"/images/" + image} alt="" />
        )
    })

    const navLinks = ["Home", "Pricing", "Products", "About Us"]
    const navLinks2 = ["Careers", "Community", "Privacy Policy"]

    const res = links(navLinks)
    const res2 = links(navLinks2)

    return (
        <footer className="bg-very-dark-blue text-white py-12">
            <div className="container mx-auto flex justify-between flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-between">
                    <img src="/images/logo-white.svg" alt="Manage Logo" width="200px" />

                    <div className="flex space-x-6">
                        {socialIcons}
                    </div>
                

                </div>

                <div>
                    <ul className="space-y-6">
                        {res}
                    </ul>
                </div>
                <div>
                    <ul className="space-y-6">
                        {res2}
                    </ul>
                </div>

                <div className="flex justify-between flex-col">

                    <form action="" className="flex gap-4">

                        
                            <input 
                            className="rounded-3xl outline-none border-none py-4 inline px-4 bg-white text-bright-red"
                            type="email"
                            placeholder="Updates in your inbox"
                            />

                            <button className="btn-primary  ">Go</button>
                        

                    </form>

                    <p className="text-sm text-right">Copyright 2022. All rights reserved</p>

                </div>
            </div>
        </footer>
    )

}