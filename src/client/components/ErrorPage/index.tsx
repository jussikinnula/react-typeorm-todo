import * as React from 'react';
import './index.styl';

interface Props {
  error: any;
}

export default ({ error }: Props) => (
  <div className="ErrorPage transition-item">
    <h1>Error</h1>
    <p>{error && error.message}</p>
  </div>
);
