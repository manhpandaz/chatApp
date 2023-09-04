import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import "./PageStyle.scss";
import Addavatar from "../assets/images/addAvatar.png";

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        displayName,
        email,
        password,
        file
      );

      const storageRef = ref(getStorage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(true);
    }

    // .then((userCredential) => {
    //   const user = userCredential.user;
    //   console.log(user);
    // })
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1 className="logo">Chat App</h1>
        {/* <NavLink to={"/login"}>Login</NavLink> */}
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full name" id="" />
          <input type="email" name="email" placeholder="Email" id="" />
          <input type="password" name="password" placeholder="Password" id="" />
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={Addavatar} alt="" />
            <span>Add a avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span className="error">Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
