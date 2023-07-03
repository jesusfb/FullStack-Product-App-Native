import { createContext } from 'react';

import { Product } from '../../interfaces';

interface ContextProps {
  products: Product[];

  getProducts: () => void;
  addNewProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (_id: number) => void;
}

export const ProductContext = createContext({} as ContextProps);