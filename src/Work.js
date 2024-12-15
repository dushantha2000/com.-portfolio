import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, category, image, link, featured, index }) => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,  // Stagger effect
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hover: { 
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`group relative rounded-lg overflow-hidden bg-gray-800 ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Image Container */}
      <motion.div 
        className={`overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
        variants={imageVariants}
      >
        <img
          src={image || `/api/placeholder/${featured ? 800 : 400}/${featured ? 450 : 300}`}
          alt={title || "Project image"}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6"
        variants={overlayVariants}
      >
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <h3
              className={`font-bold text-white mb-1 ${
                featured ? 'text-2xl' : 'text-lg'
              }`}
            >
              {title}
            </h3>
            <p className="text-purple-400 text-sm">{category}</p>
          </motion.div>
          
          <motion.a
            href={link}
            aria-label={`View project: ${title}`}
            className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/ViewProject${index + 1}`} >
             View Details
            </Link>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MyWorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Quick Medi (Medical application)",
      category: "Ux Design",
      image: "/images/project2.PNG",
      link: "#",
    },
    {
      title: "Jayasiri motors (website)",
      category: "Backend Development",
      image: "/images/project4.PNG",
      link: "#",
      featured: true,
    },
    {
      title: "CarServe Website",
      category: "Backend Development",
      image: "/images/project1.PNG",
      link: "#",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full bg-linear-gradien py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="mb-12 text-center md:text-left"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-white">
            <motion.span
              className="text-purple-500 inline-block"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              05.
            </motion.span>
            {" "}My Work
          </h2>
          <motion.div 
            className="w-12 h-0.5 bg-purple-500 mx-auto md:mx-0 mt-2"
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MyWorkSection;