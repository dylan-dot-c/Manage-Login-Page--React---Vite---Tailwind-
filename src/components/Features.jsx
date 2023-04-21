
const features = [
    {
        header: "Track company-wide progress ",
        content: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },        
    {
        header: "Advanced built-in reports",
        content: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        header: "Everything you need in one place",
        content: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    },
]

export default function Features() {
    
    const featuresList = features.map( (feature, index) => {

        return (
            <div className="flex gap-4 items-start flex-col md:flex-row" key={index}>

                <div className="flex items-center bg-pale-red rounded-full gap-4 pr-8  w-full md:w-auto md:bg-transparent">
                    <span className="rounded-3xl bg-bright-red font-bold text-white px-5 py-1  md:px-8 md:py-2 md:-mt-2">0{index+1}</span>
                    <h3 className="text-sm font-bold block md:hidden">{feature.header}</h3>
                </div>
                

                <div>
                    <h3 className="mb-8 font-bold hidden md:block">{feature.header}</h3>
                    <p className="max-w-[450px] px-2 md:px-0">{feature.content}</p>
                </div>
            </div>
        )
    }
    )
    return (
        <section className="container mx-auto flex  flex-col p-4 mb-12 md:flex-row">

            <div className="w-full mb-10 md:w-1/2">
                <h2 className="text-4xl font-bold mb-8 max-w-full text-center md:text-left md:max-w-md">What’s different about  Manage?</h2>
                <p className="w-full text-center px-2 md:max-w-sm md:text-left">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>

            <div className="space-y-12">
                {featuresList}
            </div>

        </section>
    )
}