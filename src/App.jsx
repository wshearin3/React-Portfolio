import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css'

function App() {
    return (
        <div className="App">
    <Header />
    <AboutMe />
    <Portfolio />
    <Contact />
    <Footer />
    <Resume />
    </div>
    );
}

export default App;