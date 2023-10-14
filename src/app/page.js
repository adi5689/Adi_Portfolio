import Image from 'next/image';
import HeroSection from './component/HeroSection';
import Navbar from './component/Navbar';
import AboutSection from './component/AboutSection';
import ProjectsSection from './component/ProjectsSection';
import EmailSection from './component/EmailSection';
import Footer from './component/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-black via-[#200d73da] to-black">
      <Navbar />
      <div className='container mx-auto px-8 lg:px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />      
    </main>
  )
}
