import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import { Page404 } from './components/Page404'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} >
          <Route path=":id" element={<Post />}/>
        </Route>
        {/* <Route path="/posts" element={<Post />} /> */}
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
