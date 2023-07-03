import { ProductState } from '.';

import { Product } from '../../interfaces';

type ProductActionType =
  | { type: '[Product] - Get Products', payload: Product[] }
  | { type: '[Product] - Post Product', payload: Product }
  | { type: '[Product] - Update Product', payload: Product }
  | { type: '[Product] - Delete Product', payload: number }

export const productReducer = (state: ProductState, action: ProductActionType): ProductState => {

  switch (action.type) {
    case '[Product] - Get Products':
      return {
        ...state,
        products: [...action.payload]
      }

    case '[Product] - Post Product':
      return {
        ...state,
        products: [...state.products, action.payload]
      }

    case '[Product] - Update Product':
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            product = action.payload;
          }
          return product
        })
      }

    case '[Product] - Delete Product':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }

    default:
      return state;
  }
}