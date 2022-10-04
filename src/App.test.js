import { render, screen } from '@testing-library/react';
import App from './App';
// import Navigate from './Components/Navigate/Navigate';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navigate options', () => {
  render(<Navigate />);
  const linkElement = screen.getByText(/Place orders/i);
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
