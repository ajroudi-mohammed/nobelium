import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Home',
      BLOG: 'Blog',
      RSS: 'RSS',
      SEARCH: 'Search',
      ABOUT: 'About'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    }
  },
  es: {
    NAV: {
      INDEX: 'Home',
      BLOG: 'Blog',
      RSS: 'RSS',
      SEARCH: 'Buscar',
      ABOUT: 'Acerca de mí'
    },
    PAGINATION: {
      PREV: 'Anterior',
      NEXT: 'Siguiente'
    },
    POST: {
      BACK: 'Atrás',
      TOP: 'Arriba'
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'zh-hk':
      return lang['zh-HK']
    case 'zh-tw':
      return lang['zh-TW']
    case 'ja':
    case 'ja-jp':
      return lang.ja
    case 'es':
    case 'es-ES':
      return lang.es
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
