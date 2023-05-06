import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Home, RichTextEditor, ReactMarkdown, Page404 } from './scenes'

function App() {
   return (
      <Routes>
         <Route element={<Navbar />}>
            <Route index path='/' element={<Home />} />
            <Route path='richtexteditor' element={<RichTextEditor />} />
            <Route path='react-markdown' element={<ReactMarkdown />} />
         </Route>
         <Route path='*' element={<Page404 />} />
      </Routes>
   )
}

export default App
