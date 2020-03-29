import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import NavBar from '../components/NavBar';

const ResumePage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Resume | Christopher Obando</title>
      <html lang="en" />
    </Helmet>
    <NavBar />
  </div>
);

export default ResumePage;
