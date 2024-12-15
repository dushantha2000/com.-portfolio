import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image, featured, projectIndex }) => {
  return (
    <motion.div className={`group relative rounded-lg overflow-hidden bg-gray-800 ${featured ? 'col-span-2 row-span-2' : ''}`}>
      
      {/* Image */}
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-purple-400">{category}</p>
          </div>

          {/* Link to Detail Page */}
          <Link to={`/view-project-${projectIndex}`} className="flex items-center text-white hover:text-purple-400">
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
