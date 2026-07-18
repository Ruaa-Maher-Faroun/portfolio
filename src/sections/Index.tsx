import Layout from '../layout/Layout'
import HeroSection from './HeroSection'
import SkillsSection from './SkillsSection'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const sections = [
    // { section: <HeroSection />, id: "home", isFrosted: false },
    // { section: <AboutSection />, id: "about", isFrosted: false },
    { section: <SkillsSection />, id: "skills", isFrosted: false },
    { section: <ProjectsSection />, id: "projects", isFrosted: false },
    { section: <ContactSection />, id: "contact", isFrosted: true },
]
const Index = () => {
    return (
        <>
        <Navbar />
         <HeroSection />
         <AboutSection />
            {sections.map((section) => (
                <Layout isFrosted={section.isFrosted} id={section.id}>
                    {section.section}
                </Layout>

            ))
            }
            <Footer />
        </>
    )
}

export default Index
