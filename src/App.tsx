import { ThemeProvider } from 'styled-components'
import { BirthdayCard } from './pages/BirthdayCard'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BirthdayCard />
    </ThemeProvider>
  )
}
