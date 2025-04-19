import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/theme-provider.jsx'
import { SocialDataViewer } from './pages/Userinput.jsx'
import Fileinstruction from './pages/Fileinstruction.jsx'


createRoot(document.getElementById('root')).render(
  
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={   <App />}/>
      <Route path='/instruction' element={<Fileinstruction/>} />
      <Route path='/input/profileData' element={   <SocialDataViewer />} />
      
    </Routes>
    </BrowserRouter>
  </ThemeProvider>,
)
