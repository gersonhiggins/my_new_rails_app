import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from '../redux/actions/greetingActions';

function Greeting() {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    // Make an HTTP request to fetch the random greeting
    fetch("/random_greeting")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;