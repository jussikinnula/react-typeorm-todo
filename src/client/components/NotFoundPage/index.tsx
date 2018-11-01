import * as React from 'react';
import Link from 'redux-first-router-link';
import './index.styl';

export default () => (
  <div className="NotFoundPage transition-item">
    <h1>Page Not Found</h1>
    <p>The page you requested was not found. Please <Link to="/">go back</Link></p>
  </div>
);
