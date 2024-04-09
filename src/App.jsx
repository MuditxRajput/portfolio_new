import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            <AboutMe />
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
