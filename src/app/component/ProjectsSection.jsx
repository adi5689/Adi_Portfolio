import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id:1,
        title: "ShoeMonkey_2.0",
        description: "It is a ecommerce site for shoes with features like cart, product carousel, made using React, NodeJS, Tailwind, ExpressJS, Redux.",
        image: "https://i.postimg.cc/T2HRBNL7/Screenshot-2024-04-18-032256.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/ShoeMonkey_Client_2.0",
        previewUrl:"https://shoe-monkey-client-2-0.vercel.app/",
    },
    {
        id:2,
        title: "BooKVersE",
        description: "It is an online book catalogue where you can store your fav books, access them and also use its pdf.",
        image: "https://i.postimg.cc/KjVtXjxH/bookverse.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/bookverse_frontend",
        previewUrl:"https://bookverse-frontend-mauve.vercel.app/",
    },
     {
        id:3,
        title: "Cryptoverse",
        description: "It is an online dashboard where you can monitor the daily performance of the top 100 crypto currencies in the world along with a news section that contains the top articles of the crypto world that too in real time thanks to the CoinRanking and CryptoNews Api's from Rapid API.",
        image: "https://i.postimg.cc/dQzY05zz/cryptoverse.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/Cryptoverse",
        previewUrl:"https://cryptoverse-virid-seven.vercel.app/",
    },
    {
        id:4,
        title: "BOOKSIE",
        description: "_",
        image: "https://i.postimg.cc/D0f3WBKG/Screenshot-2024-02-27-191120.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/BOOKSIE/tree/main",
        previewUrl:"https://booksie.vercel.app/",
    },
    {
        id:5,
        title: "AdGenzy",
        description: "Online Portfolio website for an Agency.",
        image: "https://i.postimg.cc/P5X6k1Ht/Screenshot-2024-08-27-010558.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/AdGenzy",
        previewUrl:"https://ad-genzy.vercel.app/",
    },
    {
        id:6,
        title: "Gymme",
        description: "It is a SPA for a Gym chain.",
        image: "https://i.postimg.cc/xT4PBh6P/Screenshot-2024-08-27-010639.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/Gymm",
        previewUrl:"https://gymm-three.vercel.app/",
    },
    {
        id:7,
        title: "Online Video Downloader",
        description: "It is a video downloading site mage with Rapid api and React.",
        image: "https://i.postimg.cc/9fqGRCVM/video-downloader.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/Online-Video-Downloader",
        previewUrl:"https://online-video-downloader-alpha.vercel.app/",
    },
    {
        id:8,
        title: "A-Design",
        description: "It is a Tshirt design site, where you can upload you designs/logos and design your tshirt the way you want to. Tech used here are React/Nextjs, Framer-Motion, ThreeJs and Tailwind CSS.",
        image: "/images/projects/A_design.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/A",
        previewUrl:"https://a-designs.vercel.app/",
    }
]

const ProjectsSection = () => {
    const cardVariants = {
        initial: { y:50, opacity:0 },
        animate: { y: 0, opacity: 1 },
    };
    
  return (
    <section>
        <h2 id="projects" className='text-center text-3xl sm:text-4xl font-bold text-white mb-10'>
            Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectData.map((project) => 
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                desc={project.description}
                imgUrl={project.image}
                tag={project.tag}
                gitUrl={project.gitUrl}
                PreviewUrl={project.previewUrl}
            />)}
        </div>
    </section>
  )
}

export default ProjectsSection;
