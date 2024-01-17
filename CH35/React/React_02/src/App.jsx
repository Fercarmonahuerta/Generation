import './App.css'
import BarraNavegacion from'./components/Navbar'//primero importo y luego meto en la función
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'

function App() {
  const imgFashion ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933';
  const imgDark = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747';
  const Beige = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437';
  return (
    <>
      <BarraNavegacion/>
      <Main/>
      <Button label='Traer información'/>
      <Button label='Enviar información'/>


      <Products
      img={imgFashion}
      name='Fashion'
      description="Tennis Fitnes Running Purple"
      precio="$1959.99"
      />
      <Products
      img={Beige}
      name='Dark'
      description= 'Tennis Dark Running'
      price='$2296.50'
      />
      <Products
      img= {imgDark}
      name='Beige'
      description='Casual Tennis'
      price='$3420.00'
      />
      {/*
       <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers'/>
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1959</h4>
      */}
    </>
  )
}

export default App
