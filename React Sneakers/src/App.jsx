import './App.css'
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Catalog from './components/Catalog';


function App() {

  return (
    <>
      {/* <CartSidebar/> */}
      <div className='bg-white m-25 rounded-2xl'>
        <Header/>
        <Catalog/>
      </div>
    </>
  )
}

export default App
