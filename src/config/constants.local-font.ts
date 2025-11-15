import localFont from 'next/font/local'

export const iranSansXFaNum = localFont({
  variable: '--font-iran-sans-x-fa-num',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Thin.woff2',
      weight: '100',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-UltraLight.woff2',
      weight: '200',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Light.woff2',
      weight: '300',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-DemiBold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Bold.woff2',
      weight: '700',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../assets/fonts/iranSansXFaNum/IRANSansXFaNum-Black.woff2',
      weight: '900',
    },
  ],
})
