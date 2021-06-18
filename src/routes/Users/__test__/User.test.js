import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Users from '../Users';

afterEach(cleanup);

describe('Test User component', () => {
  function tree() {
    return render(<Users/>)
  }

  it('should match with snapshot', () => {
    expect(tree()).toMatchSnapshot();
   });

   it('test button', () => {
     const { getByTestId } = tree();
     const element = screen.getByTestId('email');
     expect(element.textContent).toEqual("E-Mail")
     // screen.debug();
    });
  });