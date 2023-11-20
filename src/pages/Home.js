import React from "react";
import { useNavigate  } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { useEffect, useContext, useState } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import musicImage from '../assets/music.svg';

export default function Home() {
  const navigate = useNavigate ();
  const { setToken, isLoggedIn, setLogin} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hash = window.location.hash
    let token = ""
    if (hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    }
    
    if (token) {
      window.location.hash = '';
      setToken(token);
      setLogin();
    }
  }, [])

  const handleNavigate = () => {
    navigate('/Era');
  };

  const handleSpotifyLogin = () => {
    setIsLoading(true);
    window.location.href = 'http://localhost:5000/auth/spotify';
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.75, ease: "easeOut"}}
      className="flex flex-row justify-center items-center h-screen">

      <motion.div 
        className="max-w-lg" 
        initial={{ x: "-50%" }} 
        animate={{ x: 0 }}  
        transition={{ duration: 0.65, ease: "easeOut"}}>
        
        <div className="font-bold mb-10">
          <h1 className="text-8xl">REWIND</h1>
          <p className="pl-2">AI Powered</p>

        </div>
        <p className="pl-2 mb-8">
          Embark on a nostalgic musical journey with Rewind. Choose your era, feel the memories, and let the good times replay!
        </p>

        {isLoggedIn ? (
          <button 
          className="btn mt-6 pl-2 mb-10" 
          onClick={handleNavigate}>
            <div className="flex items-center">
                <FontAwesomeIcon className="pr-3" size="2x" icon={faCheck} style={{ color: "#1CB351" }} />
                <span>Get Started</span>
              </div>
          </button>

        ) : (
          <button 
          className="btn pl-2 mt-6 mb-10" 
          onClick={handleSpotifyLogin}
          disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
              <span className="ml-3">Connecting...</span>
            </div>
            ) : (
              <div className="flex items-center">
                <FontAwesomeIcon className="pr-3" size="2x" icon={faSpotify} style={{ color: "#1CB351" }} />
                <span>Login To Spotify</span>
              </div>
            )}
        </button>
        )}

      </motion.div>
      <motion.div
        initial={{ x: "50%" }} 
        animate={{ x: 0 }}  
        transition={{ duration: 0.65, ease: "easeOut"}}>
        <img className="h-61" src={musicImage} alt="Description" />
      </motion.div>
    </motion.div>
  );
}