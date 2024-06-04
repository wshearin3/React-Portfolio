import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'

function App() {
    return (
        <div className="App">
    <Header />
    <AboutMe />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    );
}

export default App;