// Components
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

// Pages
import { Catalog } from "./pages/catalog"

const App = () => {

  return (
    <div className='app'>
      <Navbar />

      <Catalog />

      <Footer />
    </div>
  )
}

export default App
