import '../css/home.css';
import photo from '../image/ggg.jpg';
import git from '../image/git.png';
import link from '../image/linkdin.png';
import Contact from './Contact.js';
import About from './About.js';
import Skills from './Skills.js';
// import git from '../image/git.png';

function Home(){
    return(
        <>
        <section id="profile">
      <div className="section__pic-container">
        <img src={photo} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">GANESH</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
       <a 
  href="https://drive.google.com/file/d/1mN5zKLTZiPrZ--C2Hj-o2PVCzK7zr4zA/view?usp=drivesdk"
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn-color-2 button"
>
  Download CV
</a>
          <button className=" btn-color-1">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={link}
            alt="My Github profile"
            className="icon"
            id='ins'
          />
           <img
            src={git}
            alt="My Github profile"
            className="icon"
            id='ins'
          />
        </div>
      </div>
    </section>
      <About />
      <Skills />
      <Contact />
       
    </>
    );
}
export default Home;