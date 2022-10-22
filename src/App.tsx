// Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

// Pages
import { Cart } from './pages/cart'
import { Home } from "./pages/home"
import { Admin } from "./pages/admin"
import { About } from "./pages/about"
import { Catalog } from "./pages/catalog"
import { Wishlist } from "./pages/wishlist"
import { GlobalContext } from './store/global_context';

const App = () => {

  return (
    <GlobalContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App
