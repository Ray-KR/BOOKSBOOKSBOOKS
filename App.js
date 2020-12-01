import './App.css';
import Home from './components/Home';
import Banner from './components/Banner Info';
import CustomNavbar from './components/Navbar';
import AllBooks from './components/Books';
import InputBooks from './components/Books_Input'
import ContactUs from './components/Contact Info'
import RFooter from './components/Footer'


function App() {
  return (
    <div className="Complete">
             
        <Banner />
        <CustomNavbar />
        <AllBooks />
        
        <ContactUs />
        <RFooter />

    </div>
  );
}

export default App;
