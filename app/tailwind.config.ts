import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./nuxt.config.ts'],
  theme: {
    fontSize: {
      h1: ['30px', { lineHeight: '36px', fontWeight: 700 }],
      h2: ['24px', { lineHeight: '28.8px', fontWeight: 600 }],
      regular: ['20px', { lineHeight: '24px', fontWeight: 400 }],
      small: ['18px', { lineHeight: '28px' }],
      tiny: ['14px', { lineHeight: '16.8px', fontWeight: 400 }],
    },
    fontFamily: {
      body: ['Lato', 'Open Sans', 'sans-serif'],
    },
    colors: {
      primary: '#FFE81F',
      secondary: '#20182B',
      error: '#C47768',
      success: '#03DAC6',
      dark: {
        400: '#353535',
        600: '#232323',
        800: '#121212',
      },
      light: {
        100: '#FFFFFF',
        200: '#CECECE',
        400: '#DFDFDF',
      },
    },
    boxShadow: {
      'weak': '0px 2px 12px 0px #00000033',
      'medium': '0px 2px 24px 0px #00000066',
      'strong': '0px 8px 40px 0px #0000004D',
    }
  },
}