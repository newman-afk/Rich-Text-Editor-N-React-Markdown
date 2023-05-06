import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

function MyReactMarkdown() {
   const [input, setInput] = useState('')
   return (
      <div className='grid md:grid-cols-2 min-h-[1000px] my-12 gap-2 xl:px-8'>
         <div className='flex flex-col'>
            <h1 className='text-center my-2 text-lg'>Editor</h1>
            <div className='border flex-1 shadow-lg'>
               <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className='w-full min-h-[500px] h-full border-box p-4'
               ></textarea>
            </div>
         </div>
         <div className='flex flex-col'>
            <h1 className='text-center my-2 text-lg'>Preview</h1>
            <div className='border flex-1 shadow-lg '>
               <ReactMarkdown
                  skipHtml={false}
                  className='prose p-4 mx-auto'
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
               >
                  {input}
               </ReactMarkdown>
            </div>
         </div>
      </div>
   )
}

export default MyReactMarkdown
