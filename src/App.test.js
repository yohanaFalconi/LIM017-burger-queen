import { render, screen } from '@testing-library/react';
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('renders learn react link', () => {
  render(<App />);
  
  const logIn = screen.getByText(/Sign in/i)
  /*const logIn = screen.getByRole('button', {
    name: /Sign in/i
  })*/

  expect(logIn).toBeInTheDocument();

});
