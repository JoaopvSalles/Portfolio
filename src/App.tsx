import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { Menu } from './Components/Menu'
import { Home } from './Components/Home'
import { Projects }  from './Components/Projects'
import { Projects1 } from './Components/Projects1'
import { Projects2 } from './Components/Projects2'
import { Projects3 } from './Components/Projects3'
import { Projects4 } from './Components/Projects4'
import { Projects5 } from './Components/Projects5'
import { Projects6 } from './Components/Projects6'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { usePersistedstate } from './utils/usePersistedState'

import { GlobalStyle } from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

export function App() {
  const [theme, setTheme] = usePersistedstate<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

        <Menu toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/1" element={<Projects1 />} />
          <Route path="/projects/2" element={<Projects2 />} />
          <Route path="/projects/3" element={<Projects3 />} />
          <Route path="/projects/4" element={<Projects4 />} />
          <Route path="/projects/5" element={<Projects5 />} />
          <Route path="/projects/6" element={<Projects6 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <GlobalStyle />

      </ThemeProvider>
    </BrowserRouter>
  )
}