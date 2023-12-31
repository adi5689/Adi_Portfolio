import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id:1,
        title: "ShoeMonkey - E-Commerce Site",
        description: "It is a ecommerce site for shoes with features like cart, product carousel payment gateway, made using React/NextJs, Tailwind, Strapi, Stripe, Redux.",
        image: "/images/projects/shoemonkey_1.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/shoeMonkey_frontend",
        previewUrl:"https://shoe-monkey.vercel.app/",
    },
    {
        id:2,
        title: "CRED UI CLONE",
        description: "It is UI clone of the fintech startup CRED, made using React & Hooks.",
        image: "/images/projects/cred_ui.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/Cred_UI_Clone",
        previewUrl:"https://cred-ui-clone-three.vercel.app/",
    },
    {
        id:3,
        title: "A-Design",
        description: "It is a Tshirt design site, where you can upload you designs/logos and design your tshirt the way you want to. Tech used here are React/Nextjs, Framer-Motion, ThreeJs and Tailwind CSS.",
        image: "/images/projects/A_design.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/A",
        previewUrl:"https://a-designs.vercel.app/",
    },
    {
        id:4,
        title: "A-Line",
        description: "It is a react SPA(single page application) which contains the details of the all time classic cars. Made using Reactjs and Tailwind CSS.",
        image: "/images/projects/Aline.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/A-Line",
        previewUrl:"https://a-line-six.vercel.app/",
    },
    {
        id:5,
        title: "AESOP",
        description: "It is a responsive homepage design clone of a brand website with product carousel and sliders to show the product images.",
        image: "/images/projects/AESOP.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/AESOP",
        previewUrl:"https://aesop-livid.vercel.app/",
    },
    {
        id:6,
        title: "PizBug",
        description: "It is a Restaurant SPA made using ReactJs. It is completely responsive with grid styling used to showcase the product cards.",
        image: "/images/projects/Pizbug.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/Responsive-Restaurant-site",
        previewUrl:"https://responsive-restaurant-site-three.vercel.app/",
    },
    {
        id:7,
        title: "CART",
        description: "It is a product cart made using ReactJs and traditional Javascript.",
        image: "/images/projects/Cart.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/adi5689/CART-Feature",
        previewUrl:"https://cart-feature-theta.vercel.app/",
    },
    
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
