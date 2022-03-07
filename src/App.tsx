import './App.scss';
import About from './components/about/about';
import Contact from './components/contact-us/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Service from './components/service/service';

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <About />
    <Service />
    <Contact />
    <Footer />
  </div>
);

export default App;
