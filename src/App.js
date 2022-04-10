import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'bootstrap';




const auth = getAuth(app);


function App() {
  const [user, setUser] = useState({})
  const [guser, setGuser] = useState({})
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  // const provider = new GoogleAuthProvider();
  // const provider1 = new GithubAuthProvider();
  // const makeGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then(result => {
  //       const user = result.user;
  //       setUser(user)
  //       console.log(user);


  //     })
  //     .catch(error => {
  //       console.log('error', error);

  //     })
  // }
  // const signOu = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //       setGuser({})
  //     })
  //     .catch(error => {
  //       setUser({})
  //       setGuser({})
  //     })
  // }

  // const gitu = () => {
  //   signInWithPopup(auth, provider1)
  //     .then(result => {
  //       const credential = GithubAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;

  //       // The signed-in user info.
  //       const usergit = result.user;
  //       console.log(usergit);
  //       setGuser(usergit)


  //     })
  //     .catch(error => {
  //       console.log('error', error);

  //     })
  // }
  // for login form 
  const onBlurEmail = (e) => {
    console.log(e.target.value);

    setEmail(e.target.value)
    e.preventDefault()
  }
  const onBlurPass = (e) => {
    console.log(e.target.value);
    setPass(e.target.value)
    e.preventDefault()
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (!/(?=.*?[#?!@$%^&*-])/.test(pass)) {
      setError('error found ')
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);

      })
      .catch(error => {
        console.log(error);

      })

    e.preventDefault()


  }

  return (
    <div className="App">
      <div>
        {/* {
          user.email ?
            <button onClick={signOu}>Sign Out</button> : <>
              <button onClick={makeGoogle}>Google </button>
              <button onClick={gitu} >Github login</button>
            </>

        }
        <h1>Name : {user.displayName}</h1>

        <h3>email : {user.email}</h3>
        <img src={user.photoURL} alt="" />
        <h1>Github details</h1>
        <h1>Name:{guser.displayName}</h1> */}
        {/* log in form  */}
        <div className='d-flex w-50 justify-content-center mx-auto align-item-center pt-5'>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input onBlur={onBlurEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input onBlur={onBlurPass} type="password" className="form-control" id="exampleInputPassword1" required />
              <p className='text-danger'>{error}</p>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
