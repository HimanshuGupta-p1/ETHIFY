import { Navbar, Welcome, Footer, Service } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Market from './pages/Market'
import Exchange from './pages/Exchange'
import Wallets from './pages/Wallets'
import Transactions from './pages/Transactions'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={
        <div className='min-h-screen'>
          <div className="">
            <Welcome />
          </div>
          <Service />
        </div>} />
        <Route path='/market' element={<Market />} />
        <Route path='/exchange' element={<Exchange/>} />
        <Route path='/wallets' element={<Wallets />} />
        <Route path='/transactions' element={<Transactions/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
