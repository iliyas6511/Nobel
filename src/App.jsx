import { Route, Routes } from "react-router-dom"
import Aboutus from "./Components/Aboutus"
import ContactUs from "./Components/ContactUs"
import Homepage from "./Components/Homepage"
import Layout from "./Components/Layout"
import ProductDetails from "./Components/ProductDetails"
import Products from "./Components/Products"
import Download from "./Components/Download"


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element = {<Products />} />
          <Route path="/products/:productId" element = {<ProductDetails />} />
          <Route path="/aboutus" element = {<Aboutus />} />
          <Route path="/contactus" element = {<ContactUs />} />
          <Route path="/downloads" element = {<Download />} />
        
        </Route>

      </Routes>
    </>
  )
}

export default App
