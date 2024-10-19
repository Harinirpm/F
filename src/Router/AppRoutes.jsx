import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Catalog from '../Pages/Catalog'
import Payment from '../Pages/PaymentDetails/Payment'
import ItemDetails from '../Pages/ItemDetails'
import AddToCart from '../Pages/AddToCart'
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />  
        <Route path='/add-to-cart' element={<AddToCart />} />


      </Routes>
    </div>
  )
}

export default AppRoutes
