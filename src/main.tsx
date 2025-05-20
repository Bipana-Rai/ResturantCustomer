import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './store/store.tsx'
import CartProvider from './context/CartContext.tsx'
import { Toaster } from "@/components/ui/sonner"
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={"loading...."} persistor={persistor}>
      <CartProvider>
    <App />
    
      <Toaster />
     
    </CartProvider>
     </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>
)

