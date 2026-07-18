const Loader = () => {
    return (
        <section className='h-screen w-screen flex-center bg-slate-900 text-white'>
            <div className='animate-loader border-pink-600 border-dashed border-15 rounded-full size-60 flex-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50"
                    height="50" viewBox="0 0 24 24" fill="none" stroke="#f485d7"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-flower-icon lucide-flower"><circle cx="12" cy="12" r="3" />
                    <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
                    <path d="M12 7.5V9" /><path d="M7.5 12H9" /><path d="M16.5 12H15" /><path d="M12 16.5V15" /><path d="m8 8 1.88 1.88" />
                    <path d="M14.12 9.88 16 8" /><path d="m8 16 1.88-1.88" /><path d="M14.12 14.12 16 16" /></svg>
            </div>
        </section>
    )
}

export default Loader