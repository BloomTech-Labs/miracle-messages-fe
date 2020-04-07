import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('nav renders without crashing', () => {
    const { getByText } = render(<Navbar />);
    
    getByText('Home')
  });

// test("renders App without crashing", () => {
//     render(<App />);
//   });