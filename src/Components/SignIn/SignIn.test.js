import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import SignIn from './SignIn'

jest.mock('../../lib/firebase-init')
// src\lib\__mocks__\firebase-init.js
// ../../lib/firebase-init

const user =  {
  email: "anitaperez@email.com",
  displayName: 'Anita Perez'
}
const setUsername = jest.fn(() => user);

const props = {
user, 
setUsername
}


test('render SingIn', () => {
  render(
    <BrowserRouter>
      <SignIn props={props}/>
    </BrowserRouter>,
  );
  const logIn = screen.getByText(/Sign in/i)
 expect(logIn).toBeInTheDocument();
})


test('render click SingIn', async () => {


  render(
    <BrowserRouter>
      <SignIn props={props}/>
    </BrowserRouter>,
  );
  const logIn = screen.getByText(/Sign in/i)

  await waitFor(() => fireEvent.click(logIn))

  expect(location.pathname).toBe('/navigate')
})

  