import React from 'react'

const Footer = () => {
    return (
        <div className='w-full py-5 px-20 text-center  md:justify-between flex flexCol flex-center md:flex-row bg-slate-800 text-slate-400'>
            <div className="flex flexCol flex-center md:flex-row gap-2">
                <div className=" text-sm">
                    © 2026
                </div>
                <div className='flex-center text-light gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower logo-icon"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
                    <span>
                     Rua'a Faroun
                    </span>
               
                </div>
            </div>
            <div className="right">

                Built with React, TypeScript & Tailwind CSS
            </div>
        </div>
    )
}

export default Footer
