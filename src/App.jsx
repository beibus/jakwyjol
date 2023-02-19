import './App.css'
import logo from './images/logo.png'
import whatsapp from './images/whats.png'
import instagram from './images/igram.png'
import flagKG from './images/kg.png'
import banner from './images/banner.png'
import car from './images/car.png'
import instruction from './images/document.png'
import call from './images/Rectangle.png'
import roadsign from './images/roadsign.png'
import quizImage from './images/quiz.png'
import manual from './images/manual.png'
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
          <div className="contacts-phone"><h4>0705 265 747</h4></div>
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
              <img className='call-icon' src={call} alt="" />
              <div className="call-button-item">
              <h3 className='button-text'>Приобрести</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="actions-wrapper">
          <div className="actions-card bio">
            Биография автора
          </div>
          <div className="actions-card practice">
            Записаться на практику
          </div>
          <div className="actions-card instruction">
            Методическое  пособие
          </div>

        </div>

        <div className="instruction-wrapper">
          <div className="instruction-call">
            <div className="call-text">
              <h3>
                Приобрети методичку сейчас и получи теоретический онлайн-курс в подарок
              </h3>
              <h4>
                Подготовься к сдаче экзаменов онлайн с помощью тренировок
              </h4>
            </div>
            <div className="call-button">
              <img src={roadsign} alt="" />
              <h3>Пройти тест</h3>
            </div>
          </div>
          <div className="instruction-image">
            <img src={quizImage} alt="" />
          </div>
        </div>

        <div className="manual-wrapper">
          <div className="manual-content">
            <div className="content-header">
              <h2>Методичка</h2>
              <h4>Методическое пособие для тех кто хочет подготовиться к сдаче тестов по ГРС</h4>
            </div>
            <div className="content-body">
            </div>
            <div className="content-footer">
              <h3>
                Купите методичку и подготовьтесь к тестам с преподавателем с многолетним стажем
              </h3>
            </div>

          </div>
          <div className="manual-image">
            <img src={manual} alt="" />
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-info">
          <div>Омурбеков Руслан Жакшылыкович</div>
          <div>Инструктор по вождению и преподаватель теории  в автошколе</div>
          <div>Codifylab
            7 мкр, 23 стр, дом Атлант
            ул. Исанова 105/3</div>
        </div>
        <div className="footer-contacts">
          <div className="contacts">
            <div className="contacts-phone">
              <h4>0705 (555) 265 747</h4>
              <h4>0500 (550) 431 430</h4>
            </div>
            <div className="contacts-social">
              <Link to="about-us" ><img src={whatsapp} alt="" /></Link>
              <Link to="wishlist" ><img src={instagram} alt="" /></Link>
            </div>
            <div className="email">
              ruslanjacshylykov65@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
