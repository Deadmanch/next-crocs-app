export enum NavigationRouting {
  HOME = '/',
  CATALOG = '/catalog',
  CONTACTS = '/contacts',
  ABOUT = '/about',
  FAVORITES = '/favorites',
  PROFILE = '/profile',
  CHECKOUT = '/checkout',
  WOMAN = '/catalog/woman',
  MAN = '/catalog/man',
  KIDS = '/catalog/kids'
}

export const NAVIGATION_MENU = [
  {
    id: 1,
    name: 'Woman',
    href: NavigationRouting.WOMAN
  },
  {
    id: 2,
    name: 'Man',
    href: NavigationRouting.MAN
  },
  {
    id: 3,
    name: 'Kids',
    href: NavigationRouting.KIDS
  },
  {
    id: 4,
    name: 'Contacts',
    href: NavigationRouting.CONTACTS
  }
]
export const NAVIGATION_MENU_MOBILE = [
  {
    id: 1,
    name: 'Woman',
    href: NavigationRouting.WOMAN
  },
  {
    id: 2,
    name: 'Man',
    href: NavigationRouting.MAN
  },
  {
    id: 3,
    name: 'Kids',
    href: NavigationRouting.KIDS
  }
]
