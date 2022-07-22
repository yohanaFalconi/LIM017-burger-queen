import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import SignIn from './SignIn'

jest.mock('../../lib/firebase-init')
// src\lib\__mocks__\firebase-init.js
// ../../lib/firebase-init
test('render SingIn', () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>,
  );
  const logIn = screen.getByText(/Sign in/i)
 expect(logIn).toBeInTheDocument();
})


test('render click SingIn', async () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>,
  );
  fireEvent.click(screen.getByText(/Sign in/i));
})

  