import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";

const pricing = [
    {
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "299.9",
        features: ["An AI Agent powered by ModelSense", "Personalized recommendations based on your preferences", "Ability to explore the app and its features without any cost"],
    },
    {
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "799.9",
        features: ["An advanced AI Agent powered by ModelSense", "An analytics dashboard to track your conversations", "Priority support to solve issues quickly"],
    },
    {
        title: "Enterprise",
        description: "Tailored AI chatbot solution with dedicated support and advanced analytics",
        price: null,
        features: [
            "Fully customizable AI Agent to meet your unique business needs",
            "24/7 dedicated support to ensure seamless operation",
            "Integration with your existing systems for a smooth experience"
        ],
    },
];

const Modelsense = () => {
    return (
        <Section className="overflow-hidden" id="modelsense">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Introducing our proprietary AI technology ModelSense" title="Intelligent Navigation through proprietary filesystem"/>

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {pricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/50">{item.description}</p>

                                <div className="flex items-center h-[5.5rem] mb-6">
                                    {item.price && (
                                        <>
                                            <div className="h3">$</div>
                                            <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                                        </>
                                    )}
                                </div>

                                <Button className="w-full mb-6" href={item.price ? "/pricing" : "mailto:your-email@domain.com"} white={item.price}>
                                    {item.price ? "Get started" : "Contact us"}
                                </Button>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <img src={check} width={24} height={24} alt="" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Modelsense;