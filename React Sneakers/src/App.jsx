import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Catalog from './components/Catalog';


function App() {

  const [openSidebar, setOpenSidebar] = useState(false)

  

  return (
    <>
      {openSidebar && <CartSidebar onClose={() => setOpenSidebar(false)}/>}
      <div className='bg-white m-25 rounded-2xl'>
        <Header
        onClickCart={() => setOpenSidebar(true)}
        />
        <Catalog/>
      </div>
    </>
  )
}

export default App
