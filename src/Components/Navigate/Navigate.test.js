import { render, screen, /* cleanup */ } from '@testing-library/react';
import Navigate from './Navigate';

test('renders a link to waiter view', () => {
    render(<Navigate />);
    const waiterViewLink = screen.getByTestId('link-to-waiter-view');
    expect(waiterViewLink).toBeInTheDocument();
});

test('renders a link to chef view', () => {
    render(<Navigate />);
    const chefViewLink = screen.getByTestId('link-to-chef-view');
    expect(chefViewLink).toBeInTheDocument();
});