import { SnackbarProvider } from 'notistack';

import { AuthProvider } from './context/auth';

import { AppRouter } from './routes/AppRouter';
import { ProductProvider } from './context/products';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
    </SnackbarProvider>
  )
}

export default App;