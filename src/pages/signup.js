import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import UserForm from "../components/UserForm";

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

// include the props passed to the component for later use
const SignUp = props => {
  useEffect(() => {
    // update the document title
    document.title = 'Sign Up - Notedly';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp);
      //update local cache
      client.writeData({ data: { isLoggedIn: true } });
      //redirect to the homepage
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {/* if the data is loading, display loading message */}
      {loading && <p>Loading...</p>}
      {/* if there is an error, display an error message */}
      {error && <p>Error creating an account.</p>}
    </React.Fragment>
  );
};

export default SignUp;