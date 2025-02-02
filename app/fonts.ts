// app/fonts.ts
import localFont from 'next/font/local'

export const generalSans = localFont({
    src: [
        {
            path: '../public/fonts/GeneralSans-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-general-sans',
    display: 'swap',
})