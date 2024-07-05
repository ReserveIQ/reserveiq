import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './sections/HeroSection';
import CustomizeSection from './sections/CustomizeSection';
import OptimizeSection from './sections/OptimizeSection';
import TailoredSolutionsSection from './sections/TailoredSolutionsSection';
import UnleashAIPotentialSection from './sections/UnleashAIPotentialSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import TrustedBusinessesSection from './sections/TrustedBusinessesSection';
import IntegrationSection from './sections/IntegrationSection';
import FreeTrialSection from './sections/FreeTrialSection';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <CustomizeSection />
      <OptimizeSection />
      <TailoredSolutionsSection />
      <UnleashAIPotentialSection />
      <CaseStudiesSection />
      <TrustedBusinessesSection />
      <IntegrationSection />
      <FreeTrialSection />
    </Box>
  );
};

export default HomePage;
