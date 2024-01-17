import './Main.css'
import GenMxLogo from '../assets/generationLogo.jpg'
import App from '../App'

const Main = ()=> {
    return(
        <>
        <div className="container--main">
            <div className="main--head">
                <a href='https://mexico.generation.org/' target='_blank'>
                    <img src={ GenMxLogo } className='main--logo' alt='Logo Gen Mex'/>
                </a>
            </div>
            <h1>React + Vite</h1>
            <h2>Astros API</h2>
        </div>
        </>
    )
}
export default Main