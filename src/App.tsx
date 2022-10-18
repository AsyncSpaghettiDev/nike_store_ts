// Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

// Pages
import { Home } from "./pages/home"
import { Admin } from "./pages/admin"
import { About } from "./pages/about"
import { Catalog } from "./pages/catalog"
import { Wishlist } from "./pages/wishlist"

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
