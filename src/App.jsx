import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import "./style/app.css"
import Items from "./components/Items.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main>
        <Items />
      </main>
      <Footer />
    </>
  )
}

export default App
