import { ProductState } from '.';

import { Product } from '../../interfaces';

type ProductActionType =
  | { type: '[Product] - Get Products', payload: Product[] }

export const productReducer = (state: ProductState, action: ProductActionType): ProductState => {

  switch (action.type) {
    case '[Product] - Get Products':
      return {
        ...state,
        products: [...action.payload]
      }

    default:
      return state;
  }
}