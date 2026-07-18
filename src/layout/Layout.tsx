import { type ReactNode } from 'react'

const Layout = ({ id, isFrosted, children }: { id: string, isFrosted: boolean, children: ReactNode }) => {
    return (
        <section id={id} className="min-h-screen max-h-fit main-img relative flex-center py-25 text-slate-800">
            {isFrosted && <div className="upper-layer"></div>}
            <div data-aos="fade-up" className="main-container frosted-bg flexCol flex-center z-10 py-10 px-10  lg:px-20 max-h-fit">
                {children}
            </div>
        </section>
    )
}

export default Layout
