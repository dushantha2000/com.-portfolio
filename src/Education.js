import React from "react";
import { motion } from "framer-motion";

const EducationTimeline = () => {
  const educationHistory = [
    {
      degree: "Software Engineering (Higher National Diploma)",
      institution: "University of NIBM",
      period: "2023 - Present",
      location: "Kandy, Sri Lanka",
      icon: "🎓",
    },
    {
      degree: "Software Engineering (Diploma)",
      institution: "University of NIBM",
      period: "2022 - 2023",
      location: "Kandy, Sri Lanka",
      icon: "🎓",
    },
    {
      degree: "Advanced Level",
      institution: "Poramadulla Central College",
      period: "2017 - 2019",
      location: "Rikillagaskada, Sri Lanka",
      icon: "📚",
    },
    {
      degree: "Ordinary Level",
      institution: "Gangapalatha M.M",
      period: "2005 - 2016",
      location: "Hanguranketha, Sri Lanka",
      icon: "📚",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-linear-gradien from-gray-900 to-black py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-purple-500">04.</span>
            Education
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block text-2xl"
            >
              🎓
            </motion.span>
          </h2>
          <motion.div
            className="w-12 h-0.5 bg-purple-500 mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 h-full w-px bg-violet-400/30 -translate-x-1/2 origin-top"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          {educationHistory.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? "mr-[50%] pr-8 text-right" : "ml-[50%] pl-8"
              } group`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-2 w-2 h-2 rounded-full bg-violet-400 ${
                  index % 2 === 0 ? "right-0 translate-x-1" : "left-0 -translate-x-1"
                } group-hover:scale-150 transition-transform`}
                whileHover={{ scale: 1.5 }}
              />
              <div
                className={`transform transition-transform duration-300 ${
                  index % 2 === 0 ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"
                }`}
              >
                <h3 className="text-lg font-medium text-white">{item.degree}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
