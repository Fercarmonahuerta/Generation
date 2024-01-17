import './Navbar.css' 
import IssLogo from '../assets/ISS_logo.svg'

const Navbar = ()=>{
    const url1 = 'https://www.nasa.gov/international-space-station/';
    const url2 = 'http://open-notify.org/Open-Notify-API/People-In-Space/';

    return(
        <> 
        <div className='navbar--container'>
            <div className='navbar--title'>
              <a href={url1} id="link--logo">
                <img src={IssLogo} alt="Logo de ISS" />
                </a>  
            </div>
            <div className='navbar--links'>
                
                <div className="navbar link">
                    <a href={url1}>Home</a>
                </div>
                <div className="navbar link">
                    <a href='#'>Apolo</a>
                </div>
                <div className="navbar link">
                    <a href={url2}>Atros</a>
                </div>
            </div>
        </div>
        </>
    )
}
//function Navbar1()={ }  
export default Navbar
