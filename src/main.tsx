import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Routes.tsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.ts'
import { Toaster } from 'sonner'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Toaster  position="top-right" richColors closeButton/>
    <PersistGate loading={null} persistor={persistor}> 
    <RouterProvider router={router}>
    </RouterProvider>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
