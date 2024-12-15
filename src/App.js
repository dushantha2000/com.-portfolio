import React from 'react';
import AboutMe from './AboutMe';
import FirstPage from './FirstPage';
import Experties from './Experties';
import ProfessionalEx from './ProfessionalEx';
import Education from './Education';
import Work from './Work';
import Getin from './Getin';
import Final from './Final';
import ViewProject1 from './ViewProject1'; 
import ViewProject2 from './ViewProject2';   // Page for the second project
  // Page for the third project// Import the project detail pages

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FirstPage />
                <AboutMe />
                <Experties />
                <ProfessionalEx />
                <Education />
                <Work />
                <Getin />
                <Final />
                
              </>
            }
          />
          <Route
            exact
            path="/Home"
            element={
              <>
                <FirstPage />
                <AboutMe />
                <Experties />
                <ProfessionalEx />
                <Education />
                <Work />
                <Getin />
                <Final />
                
              </>
            }
          />

          <Route path="/About" element={<AboutMe />} />

          <Route path="/Expertise" element={<Experties />} />

          <Route path="/ProfessionalEx" element={<ProfessionalEx />} />

          <Route path="/Education" element={<Education />} />

          <Route path="/Work" element={<Work />} />

          <Route path="/ViewProject1" element={<ViewProject1 />} />
          <Route path="/ViewProject2" element={<ViewProject2 />} />
           

        </Routes>
      </div>
    </Router>
  );
}
