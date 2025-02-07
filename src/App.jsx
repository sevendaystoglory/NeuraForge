import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Modelsense from "./sections/Modelsense";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Hero />
                <Benefits />
                {/* <Collaboration /> */}
                {/* <Services /> */}
                <Modelsense />
                {/* <Roadmap /> */}
                <Footer />
            </div>
        </>
    );
};

export default App;
