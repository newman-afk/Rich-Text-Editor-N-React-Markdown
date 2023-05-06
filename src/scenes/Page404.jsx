import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Page404() {
   const navigate = useNavigate()
   useEffect(() => {
      navigate('/')
   })

   // return <div>404Page</div>
}

export default Page404
