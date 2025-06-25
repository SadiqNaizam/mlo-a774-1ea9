import React, { useState } from 'react';

import FormContainer from '../components/layout/FormContainer';
import InputField from '../components/Login/InputField';
import SecondaryLink from '../components/Login/SecondaryLink';
import SubmitButton from '../components/Login/SubmitButton';

/**
 * LoginPage Component
 * 
 * This is the main page for the login functionality. It orchestrates the layout
 * and form components to create a complete, centered login screen.
 * It follows the layout requirements by using a flex container to center the form
 * both vertically and horizontally within the viewport.
 */
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real-world application, you would add your authentication logic here.
    console.log('Login attempt with:', { username, password });
    // For demonstration, we can just alert the user.
    if (username && password) {
      alert(`Simulating login for user: ${username}`);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <FormContainer onSubmit={handleSubmit}>
        {/* The heading for the login form */}
        <h1 className="text-3xl font-bold text-card-foreground">
          Log in
        </h1>

        {/* Input field for the username */}
        <InputField
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />

        {/* Input field for the password */}
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        {/* The primary submission button */}
        <SubmitButton>Log in</SubmitButton>

        {/* The secondary link for signing up */}
        <SecondaryLink prefixText="or," linkText="sign up" href="#" />
      </FormContainer>
    </main>
  );
};

export default LoginPage;
