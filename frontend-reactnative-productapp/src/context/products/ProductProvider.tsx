import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';

import { Product, ProductsResponse } from '../../interfaces';
import { ProductContext, productReducer } from '.';

import productsApi from '../../api/productApi';

interface iAxiosError extends AxiosError { }

export interface ProductState {
  products: Product[]
}

const Product_INITIAL_STATE: ProductState = {
  products: []
}

export const ProductProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, Product_INITIAL_STATE);

  const getProducts = async () => {
    try {
      const { data } = await productsApi.get<ProductsResponse>('/products');

      if (data.ok) {
        dispatch({ type: '[Product] - Get Products', payload: data.resultado.products });

        Toast.show({
          type: 'success',
          text1: 'Productos Obtenidos',
          text2: data.msg,
          visibilityTime: 2500,
          topOffset: 10,
        });
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as ProductsResponse;

      Toast.show({
        type: 'error',
        text1: 'Productos Error',
        text2: data.msg,
        visibilityTime: 2500,
        topOffset: 10,
      });
    }
  }

  return (
    <ProductContext.Provider value={{
      ...state,
      getProducts,
    }}>
      {children}
    </ProductContext.Provider>
  )
}