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

export const NAVIGATION_MENU_FOOTER = [
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
    name: 'Sale',
    href: '#'
  },
  {
    id: 5,
    name: 'Contacts',
    href: NavigationRouting.CONTACTS
  }
]

export const NAVIGATION_FOOTER_LINKS_HELP = [
  {
    id: 1,
    name: 'Order Status & Returns',
    href: '#'
  },
  {
    id: 2,
    name: 'FAQs',
    href: '#'
  },
  {
    id: 3,
    name: 'Size Help',
    href: '#'
  },
  {
    id: 4,
    name: 'Accessibility',
    href: '#'
  },
  {
    id: 5,
    name: 'Caring for your Crocs',
    href: '#'
  }
]

export const NAVIGATION_FOOTER_LINKS_COMPANY = [
  {
    id: 1,
    name: 'About Crocs',
    href: '#'
  },
  {
    id: 2,
    name: 'HEYDUDE',
    href: '#'
  },
  {
    id: 3,
    name: 'Custom Group Orders',
    href: '#'
  },
  {
    id: 4,
    name: 'Careers',
    href: '#'
  },
  {
    id: 5,
    name: 'Crocs Purpose',
    href: '#'
  }
]

export const NAVIGATION_FOOTER_LINKS_SEO = [
  {
    id: 1,
    name: 'Ad Choices',
    href: '#'
  },
  {
    id: 2,
    name: 'Terms',
    href: '#'
  },
  {
    id: 3,
    name: 'Privacy Preferences',
    href: '#'
  },
  {
    id: 4,
    name: 'Privacy Policy',
    href: '#'
  }
]
