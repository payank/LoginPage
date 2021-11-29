import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Route, Switch, Redirect, Prompt} from 'react-router-dom';
import { useState, useCallback } from 'react';

function App() {
  let loggedIn = localStorage.getItem('logIn') === 'true' ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  console.log('Payank isLoggedIn', loggedIn, isLoggedIn)

  // const setLoginState = (pass) => {
  //   setIsLoggedIn(pass);
  // }

  const setLoginState = useCallback((pass) => {
    setIsLoggedIn(pass);
  }, [])



  return (
    <BrowserRouter>
      <NavBar />
    
      {isLoggedIn && <Redirect to="/all"/>}
      <Prompt
        when={!isLoggedIn}
        message={(location)=> { 
          return ['/all', '/add'].includes(location.pathname) ? 'Please Login' : true
        }}
      />
      <Switch>
        {/* <Route exact path="/" component={LoginPage} /> */}
        {/* <Route exact path="/all" component={AllUsers}  */}
        {/* <Route exact path="/add" component={AddUser} /> */}
        {/* <Route exact path="/edit/:id" component={EditUser} /> */}
        

        <Route exact path="/" render={(req)=> 
          { 
            return (<LoginPage setLoginState={
              (pass) => {
              setLoginState(pass);
            }}/>)}
        }/>

        <Route exact path="/all"  strict render={(req)=> 
          { return (isLoggedIn ? <AllUsers/> : (<Redirect to="/"/>))}
        }/>

        <Route exact path="/add"  strict render={(req)=> 
          { return (isLoggedIn ? <AddUser/> : (<Redirect to="/"/>))}
        }/>

        <Route exact path="/edit/:id" render={(req)=> 
          { return (isLoggedIn ? <EditUser/> : (<Redirect to="/"/>))}
        }/>

        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  );

}


export default App;
