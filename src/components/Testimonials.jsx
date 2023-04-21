import { useState, useEffect } from "react"

import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Testimonials() {
    const info = [
        {
            url: "/images/avatar-anisha.png",
            name: "Anisha Li",
            content: ' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
        },
        {
            url: "/images/avatar-ali.png",
            name: "Ali Brave",
            content: ' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
        },
        {
            url: "/images/avatar-richard.png",
            name: "Richard Watts",
            content: ' “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
        },
        {
            url: "/images/avatar-shanai.png",
            name: "Shanai Gough",
            content: ' “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
        }
    ]

    const [width, setWidth] = useState(0)



    let elements = info.map( (info, index) => {
        return (
            <SplideSlide>
                <div className="bg-light-grey rounded text-black px-8 md:px-4 py-2 mt-12 h-[250px]" key={index}>
                    <img src={info.url} alt="Profile Pic" class="rounded-full w-24 -translate-y-12 mx-auto" />
                    <div className="-mt-6">
                        <h4 className="font-bold mb-4">{info.name}</h4>
                        <p className="text-sm">{info.content}</p>
                    </div>
                </div>
            </SplideSlide>
        )
    })

    useEffect(() => {

        let width = window.innerWidth;
        console.log(width)
        setWidth(width)

    }, [])

    return (
        <section className="w-full">
            <h2>What They've Said</h2>

            
            <section className="text-center">
            <Splide aria-label="My Favorite Images"

                options={ {
                    rewind: false,
                    // type: 'loop',
                    padding: '3rem',
                    perPage: (width < 500) ? 1 : 3,
                    gap   : '3rem',
                    arrows: false,
                  } }
            >


                {elements}
            </Splide>
                <button className="btn-primary mx-auto mt-12">Get Started</button>
            </section>
        </section>
    )
} 