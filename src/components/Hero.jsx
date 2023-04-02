

export default function Hero() {

    return (
        <section className="flex flex-col-reverse md:flex-row container mx-auto p-8 items-center mt-0 md:mt-10 md:space-x-0 md:p-4">
            <div className="md:w-1/2 w-full md:space-y-12 md:mb-32 text-center space-y-6 mb-4 ">
                <h1 className="text-3xl font-bold md:max-w-md text-center md:text-left md:text-5xl max-w-full">
                Bring everyone together to build better products.
                </h1>
                <p className="max-w-sm text-greyish-blue md:text-left text-center md:w-full">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <button className="btn-primary block md:justify-self-center mx-auto md:mx-0">
                    Get Started
                </button>
            </div>

            <div className="md:w-1/2 w-full">
            <img src="/images/illustration-intro.svg" alt="" width="100%"/>
            </div>
        </section>
    )
}