import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Navbar() {
   const location = useLocation()
   const currentLocation = location.pathname

   return (
      <div className='min-h-screen'>
         <div className='container mx-auto'>
            <nav className='py-4 shadow'>
               <div className='flex text-xs gap-2 md:gap-8 justify-center md:text-lg'>
                  <NavLink
                     to='/richtexteditor'
                     className={`block px-4 py-2 md:px-8 md:py-4 rounded-lg hover:bg-slate-200  active:scale-95 ${
                        currentLocation === '/richtexteditor'
                           ? 'bg-slate-400 hover:bg-slate-400'
                           : 'bg-slate-100'
                     }`}
                  >
                     Rich Text Editor
                  </NavLink>

                  <NavLink
                     to='/react-markdown'
                     className={`block px-4 py-2 md:px-8 md:py-4 rounded-lg hover:bg-slate-200  active:scale-95 ${
                        currentLocation === '/react-markdown'
                           ? 'bg-slate-400 hover:bg-slate-400'
                           : 'bg-slate-100'
                     }`}
                  >
                     React Markdown
                  </NavLink>
               </div>
            </nav>
            <Outlet />
         </div>
      </div>
   )
}

export default Navbar
