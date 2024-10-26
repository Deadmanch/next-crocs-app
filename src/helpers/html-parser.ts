/* eslint-disable @typescript-eslint/no-explicit-any */
import parser from 'html-react-parser'

const addTailwindClasses = (domNode: any) => {
  if (domNode.type === 'tag') {
    switch (domNode.name) {
      case 'h2':
        domNode.attribs.className =
          (domNode.attribs.className || '') +
          'font-exo font-extrabold  text-[28px] leading-tight 768:text-[32px] 960:text-[40px]'
        break
      case 'h3':
        domNode.attribs.className =
          (domNode.attribs.className || '') +
          'font-exo font-extrabold text-[17px] font-bold leading-tight'
        break
      case 'p':
        domNode.attribs.className =
          (domNode.attribs.className || '') +
          'font-fira text-[17px] font-normal leading-snug text-foreground'
        break
      case 'ul':
        domNode.attribs.className =
          (domNode.attribs.className || '') +
          'font-fira text-[17px] font-light leading-snug text-foreground list-star'
        break
      case 'ol':
        domNode.attribs.className =
          (domNode.attribs.className || '') +
          'font-fira text-[17px] font-light leading-snug text-foreground list-star'
        break
    }
  }
}

export const htmlParser = (html: string) => {
  return parser(html, {
    replace: addTailwindClasses
  })
}
