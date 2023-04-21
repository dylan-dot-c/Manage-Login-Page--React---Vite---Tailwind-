

export default function Hero() {

    return (
        <section className="flex flex-col-reverse container mx-auto p-8 items-center -mt-6 md:flex-row md:mt-10 md:space-x-0 md:p-4">
            <div className="w-full text-center space-y-6 mb-4 md:w-1/2 md:mb-32 md:space-y-12">
                <h1 className="text-3xl font-bold  text-center  md:text-5xl max-w-full mt-6 md:max-w-md md:text-left">
                    Bring everyone together to build better products.
                </h1>
                <p className="max-w-sm text-greyish-blue text-center md:w-full md:text-left">
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <button className="btn-primary block mx-auto md:mx-0 md:justify-self-center">
                    Get Started
                </button>
            </div>

            <div className="w-full -mt-4 md:w-1/2">
                <img src="/images/illustration-intro.svg" alt="" className="w-full"/>
            </div>
        </section>
    )
}