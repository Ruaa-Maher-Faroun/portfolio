import { contactArr } from '../data/data';
const ContactSection = () => {
  return (
    <>
      <div className="text-center tracking-wider">
        <span className='mb-2 font-semibold'>Get in Touch</span>
        <h1 className="font-title  title gradient-text">
          CONTACT
        </h1>
      </div>
      <p className='tracking-wide lg:text-left text-center font-semibold'>Interested in working together? I'm always open to discussing new projects and opportunities.
      </p>
      <div className="contact-details w-full flexCol flex-center gap-2">
        {contactArr.map((contact) => (
          <a  data-aos="fade-right"  href={contact.href} target='_blank' className='contact-div flex items-center '>
            <div className="flex gap-2 flex-center data">
              <div className="icon">
                <div dangerouslySetInnerHTML={{ __html: contact.icon }} />
              </div>
              <div className="hidden md:flex md:text-sm lg:text-base flexCol text-slate-300">
                <span>{contact.contactType}</span>
                <span>{contact.value}</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" strokeLinecap="round"
              strokeLinejoin="round" className="lucide lucide-arrow-up-right h-5 w-5 text-slate-200"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </a>
        ))}
      </div>
    </>
  )
}

export default ContactSection
