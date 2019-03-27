import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout is404>
    <div className="container">
      <div className="document-content" style={{ textAlign: 'center' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
