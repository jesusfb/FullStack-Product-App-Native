import { FC, PropsWithChildren, useReducer } from 'react';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { Product, ProductsResponse, ProductResponse } from '../../interfaces';
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
  const { enqueueSnackbar } = useSnackbar();

  const addNewProduct = async (product: Product) => {
    if (product.id == 0) delete product.id

    try {
      const { data } = await productsApi.post<ProductResponse>('/products', product);

      if (data.ok) {
        dispatch({ type: '[Product] - Post Product', payload: data.resultado.product });

        enqueueSnackbar(data.msg, {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as ProductResponse
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })
    }
  }

  const updateProduct = async (product: Product) => {
    try {
      const { data } = await productsApi.put<ProductResponse>(`/products/${product.id}`, product);

      if (data.ok) {
        dispatch({ type: '[Product] - Update Product', payload: product });

        enqueueSnackbar(data.msg, {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as ProductResponse
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })
    }
  }

  const deleteProduct = async (id: number) => {
    try {
      const { data } = await productsApi.delete<ProductResponse>(`/products/${id}`);

      if (data.ok) {
        dispatch({ type: '[Product] - Delete Product', payload: id });

        enqueueSnackbar(data.msg, {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as ProductResponse;
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })
    }
  }

  const getProducts = async () => {
    try {
      const { data } = await productsApi.get<ProductsResponse>('/products');

      if (data.ok) {
        dispatch({ type: '[Product] - Get Products', payload: data.resultado.products });

        enqueueSnackbar(data.msg, {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as ProductsResponse
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })
    }
  }

  return (
    <ProductContext.Provider value={{
      ...state,
      getProducts,
      addNewProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}