import './App.css'
import 'animate.css';
import Header from './components/Header'
import Products from './components/Products'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import pen1 from './assets/pen1.jpg'
import pen2 from './assets/pen2.jpg'
import pen3 from './assets/pen3.jpg'
import note1 from './assets/note1.jpg'
import note2 from './assets/note2.jpg'
import note3 from './assets/note3.jpg'
import mouse1 from './assets/mouse1.jpg'
import mouse2 from './assets/mouse2.jpg'
import mouse3 from './assets/mouse3.jpg'

function App() {

  return (
    <div className='app'>
      <Header />
      <Products
        title="Canetas"
        description="Canetas e outros instrumentos de escrita que ficarão consigo e com a sua empresa por muito tempo."
        images={[pen1,pen2,pen3]}
        links={["https://deliver2yougift.com/index.php?route=product/product&path=314&product_id=15588","https://deliver2yougift.com/index.php?route=product/product&path=314&product_id=14519","https://deliver2yougift.com/index.php?route=product/product&path=314&product_id=14492","https://deliver2yougift.com/index.php?route=product/category&path=314"]}/>
      <Products
       title="Notas"
        description="Em formatos variados e com diferentes espessuras - certamente encontrará algo adequado."
        images={[note1,note2,note3]} 
        links={["https://deliver2yougift.com/index.php?route=product/product&path=312&product_id=16716","https://deliver2yougift.com/index.php?route=product/product&path=312&product_id=16715","https://deliver2yougift.com/index.php?route=product/product&path=312&product_id=16661","https://deliver2yougift.com/index.php?route=product/category&path=312"]}/>
      <Products
       title="Tapetes de Rato" 
       description="Tapetes de rato multifuncionais que proporcionarão a si e aos seus colaboradores conforto ao usar o rato e muito mais." 
       images={[mouse1,mouse2,mouse3]} 
       links={["https://deliver2yougift.com/index.php?route=product/product&product_id=13734&search=Tapete+Rato&description=true","https://deliver2yougift.com/index.php?route=product/product&product_id=13690&search=Tapete+Rato&description=true","https://deliver2yougift.com/index.php?route=product/product&product_id=13687&search=Tapete+Rato&description=true","https://deliver2yougift.com/index.php?route=product/search&search=Tapete%20Rato&description=true"]}/>
      <Catalogue/>
      <Footer/>
    </div>
  )
}

export default App
