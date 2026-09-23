import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem('theme');
      var theme =
        savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    } catch (e) {}
  })();
`

export const metadata = {
  metadataBase: new URL('https://raniaa.vercel.app'),
  title: 'Rania Ijaz — Full Stack Developer',
  description:
    'Full stack developer working across Next.js, TypeScript and Node.js, with machine learning research in robustness and distribution shift.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
