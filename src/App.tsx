// Components
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

// Pages
import { Catalog } from "./pages/catalog"
import { Wishlist } from "./components/wishlist"

const App = () => {

  return (
    <div className='app'>
      <Navbar />

      <Catalog />

      <Wishlist />

      <Footer />
    </div>
  )
}

export default App
