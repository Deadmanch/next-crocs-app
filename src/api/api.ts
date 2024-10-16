import { API_ROUTES } from './constants/routes'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const API = {
  auth: {
    register: BASE_URL + API_ROUTES.AUTH + '/register',
    login: BASE_URL + API_ROUTES.AUTH + '/login',
    google: BASE_URL + API_ROUTES.AUTH + '/google'
  },
  user: {
    get: BASE_URL + API_ROUTES.USER + '/me',
    getByEmail: BASE_URL + API_ROUTES.USER + '/getByEmail',
    update: BASE_URL + API_ROUTES.USER + '/update'
  },
  category: {
    getBySlug: BASE_URL + API_ROUTES.CATEGORY + '/bySlug',
    getAll: BASE_URL + API_ROUTES.CATEGORY,
    getById: BASE_URL + API_ROUTES.CATEGORY
  },
  product: {
    getAll: BASE_URL + API_ROUTES.PRODUCT,
    getBySlug: BASE_URL + API_ROUTES.PRODUCT + '/bySlug',
    getById: BASE_URL + API_ROUTES.PRODUCT,
    getByTitle: BASE_URL + API_ROUTES.PRODUCT + '/byTitle',
    getByCategory: BASE_URL + API_ROUTES.PRODUCT + '/byCategory',
    filter: {
      getStartFilter: BASE_URL + API_ROUTES.PRODUCT + '/filter-data',
      getFilter: BASE_URL + API_ROUTES.PRODUCT + '/filter'
    }
  },
  cart: {
    create: BASE_URL + API_ROUTES.CART + '/create',
    updateItemQuantity: BASE_URL + API_ROUTES.CART,
    addItem: BASE_URL + API_ROUTES.CART + '/add-item',
    removeItem: BASE_URL + API_ROUTES.CART,
    getCart: BASE_URL + API_ROUTES.CART
  },
  order: {
    create: BASE_URL + API_ROUTES.ORDER + '/create',
    getOrderByTokenOrUserId: BASE_URL + API_ROUTES.ORDER
  }
}
