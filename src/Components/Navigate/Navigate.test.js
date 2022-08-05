import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Navigate from './Navigate';

test('renders a link to waiter view', () => {
    render(
        <BrowserRouter>
          <Navigate/>
        </BrowserRouter>,
      );
    const waiterViewLink = screen.getByText(/I'm a waiter or waitress/i);
    expect(waiterViewLink).toBeInTheDocument();
});

test('renders a link to chef view', () => {
    render(
        <BrowserRouter>
          <Navigate/>
        </BrowserRouter>,
      );
    const chefViewLink = screen.getByText(/I'm a chef/i);
    expect(chefViewLink).toBeInTheDocument();
});