import './App.css'
import logo from './images/logo.png'
import whatsapp from './images/whats.png'
import instagram from './images/igram.png'
import flagKG from './images/kg.png'
import banner from './images/banner.png'
import car from './images/car.png'
import instruction from './images/document.png'
import call from './images/Rectangle.png'
import { Link } from 'react-scroll'



function App() {
  //   const myStyle={
  //     backgroundImage: 
  //     'url(./images/signs.png),
  //     height:'100vh',
  //     marginTop:'-70px',
  //     fontSize:'50px',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  // };

  return (
    <div className="App">
      <header>
        <div className="header-logo"><img src={logo} alt="" /></div>
        <div className="header-items">
          <Link activeClass="active" to="home" spy={true} smooth={true}>Главная</Link>
          <Link to="about-us" spy={true} smooth={true}>Онлайн тест</Link>
          <Link to="wishlist" spy={true} smooth={true}>Об авторе</Link>
          <Link to="wishlist" spy={true} smooth={true}>Методичка</Link>
        </div>
        <div className="header-icons">
          <div className="contacts-phone"><h3>0705 265 747</h3></div>
          <div className="contacts-social">
            <Link to="about-us" ><img src={whatsapp} alt="" /></Link>
            <Link to="wishlist" ><img src={instagram} alt="" /></Link>
          </div>
          <div className="header-language">
            <Link to="wishlist" ><img src={flagKG} alt="" /></Link>
            <Link to="wishlist" ><img src={flagKG} alt="" /></Link>
          </div>
        </div>
      </header>

      <main>
        <div className="hero-wrapper" >
          <div className="hero-banner">
            <img src={banner} alt="" />
          </div>
          <div className="hero-car">
            <img src={car} alt="" />
          </div>
        </div>

        <div className="instruction-wrapper">
          <div className="instruction-image">
            <img src={instruction} alt="" />
          </div>
          <div className="instruction-call">
            <div className="call-text">
            Приобрети методичку сейчас и получи теоретический онлайн-курс в подарок
            </div>
            <div className="call-button">
              <img src={call} alt="" />
              <h3>Приобрести</h3>
            </div>
          </div>
        </div>

        <div className="actions-wrapper">
          
        </div>
      </main>
    </div>
  );
}

export default App;
