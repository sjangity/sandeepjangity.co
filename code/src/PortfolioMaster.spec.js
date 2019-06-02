import React from 'react';
import { render } from 'react-testing-library';

import PortfolioMaster from './PortfolioMaster';

describe('PortfolioMaster', () => {
  it('Renders without error', () => {
    render(<PortfolioMaster />);
    expect(true).toBe(true);
  });
});
