
import insta from '../image/insta.png';
import face from '../image/face.png';
import '../css/footer.css';

function Footer(){
    return(
      <>
       
        <div className='footer'>
           <div id="socials-container">
          <img
            src={face}
            alt="My LinkedIn profile"
            className="icon"
            id='inst'
            
          />
          <img
            src={insta}
            alt="My Github profile"
            className="icon"
            id='ins'
          />
        </div>
        <p>&copy; created by GANESH</p>
        </div>
        </>
    );
}
export default Footer;