

import "../slick.css"
import "../slick-theme.css"

import Slider from "react-slick";

function SimpleSlider(props){
    const slidesVisible = window.height > 768 ? 3 : 1;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dotClass: "bg-purple-400 border-black text-red",
      
    }

    return (
      <div className="w-full p-4">
      
        <Slider {...settings}>
          {props.elements}
        </Slider>
      </div>
    );
  }



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

    let elements = info.map( (info, index) => {
        return (
            <div className="bg-light-grey rounded text-black px-4 py-2 mt-12 h-[250px]" key={index}>
                <img src={info.url} alt="Profile Pic" class="rounded-full w-24 -translate-y-12 mx-auto" />
                <h4 className="font-bold mb-4">{info.name}</h4>
                <p>{info.content}</p>
            </div>
        )
    })

    return (
        <section className="w-full">
            <h2>What They've Said</h2>

            <section className="text-center">
                <SimpleSlider elements={elements} />

                <button className="btn-primary mx-auto mt-12">Get Started</button>
            </section>
        </section>
    )
} 