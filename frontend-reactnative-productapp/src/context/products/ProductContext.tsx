import { createContext } from 'react';

import { Product } from '../../interfaces';

interface ContextProps {
  products: Product[];

  getProducts: () => void;
}

export const ProductContext = createContext({} as ContextProps);