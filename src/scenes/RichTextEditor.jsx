import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function RichTextEditor() {
   const [value, setValue] = useState('')
   const markup = { __html: value }

   const modules = {
      toolbar: [
         [{ font: [] }],
         [{ header: [1, 2, 3, 4, 5, 6, false] }],
         ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
         [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
         ],
         ['link', 'image'],
         ['clean'],
      ],
   }

   return (
      <div className='grid md:grid-cols-2 min-h-[1000px] my-12 gap-2 xl:px-8'>
         <div className='flex flex-col'>
            <h1 className='text-center my-2 text-lg'>Editor</h1>
            <div className='border flex-1 shadow-lg'>
               <ReactQuill
                  className='w-full h-full'
                  theme='snow'
                  value={value}
                  onChange={setValue}
                  modules={modules}
               />
               {/* <textarea className='w-full min-h-[500px] h-full border-box p-4'></textarea> */}
            </div>
         </div>
         <div className='flex flex-col'>
            <h1 className='text-center my-2 text-lg'>Preview</h1>
            <div className='border flex-1 shadow-lg'>
               <div
                  dangerouslySetInnerHTML={markup}
                  className='prose prose-base p-4 mx-auto'
               ></div>
            </div>
         </div>
      </div>
   )
}

export default RichTextEditor
