import React from "react";
import { useNavigate  } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import {useEffect, useContext } from 'react';

export default function Home() {
  const navigate = useNavigate ();
  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const hash = window.location.hash
    let token = ""
    if (hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    }
    
    if (token) {
      window.location.hash = '';
      setToken(token);
    }
  }, [])

  const handleNavigate = () => {
    navigate('/About');
  };

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/spotify';
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">REWIND</h1>
        <p className="mb-4">
          Embark on a nostalgic musical journey with Rewind. Choose your era, feel the memories, and let the good times replay!
        </p>
          <button
            className="btn btn-outline btn-secondary"
            onClick={handleNavigate}>
            Get started
          </button>
          <button
            className="btn btn-outline btn-secondary"
            onClick={handleLogin}>
            Connect to spotify
          </button>
      </div>
    </div>
  );
}