import React from 'react';
import './App.css';
import Counters from './components/Counters';
import EffectCounter from './components/EffectCounter';
import ContextExample from './components/ContextExample';
import { UserProvider } from './context/userContext';
import RefExample from './components/RefExample';
import CallbackExample from './components/CallbackExample';
import UseMemoExample from './components/UseMemoExample'
import useWindowDimensions from './hooks/useWindowDimensions';
import FetchUserData from './components/FetchUserData';
import TodoList from './components/TodoList';

function App() {
  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { width, height } = useWindowDimensions();

  const handleLogin = () => {
    setUser({ firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' });
  }

  React.useEffect(() => {
    const message = 'We miss you already.';
    let original;

    const handleFocus = (e) => {
      if (e.target === window) {
        if (original) {
            document.title = original;
          }
        }
    };

    const handleBlur = (e) => {
      if (e.target === window) {
          const { title } = document;
          if (title !== message) {
              original = title;
          }
          document.title = message;
        }
    };

    // subscribe side effect
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // unsubscribe side effect / cleanup function
    // Works like componentDidUnmount
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  });

  return (
    <div className="App">
      {/* <Counters /> */}
      {/* <EffectCounter />
      <UserProvider value={user}>
        <ContextExample />
      </UserProvider>
      <button type="button" onClick={handleLogin}>
        Login
      </button> */}
      {/* <RefExample /> */}
      {/* <CallbackExample /> */}
      {/* <UseMemoExample /> */}
      {/* <h1>Window Dimensions</h1>
      <p>Width: {width} </p>
      <p>Height: {height} </p>
      <h1>Fetch User Data</h1>
      <FetchUserData /> */}
      <TodoList />
    </div>
  );
}

export default App;
