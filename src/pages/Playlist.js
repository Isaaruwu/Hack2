import React from 'react'
import { useContext} from 'react';
import { AuthContext } from '../AuthContext';
import { motion } from "framer-motion";
import SpotifyModal from "../components/SpotifyModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";


export default function Playlist() {
  const navigate = useNavigate ();
  const { songs, clearSongs } = useContext(AuthContext);

  const handleNavigate = () => {
    clearSongs()
    navigate(-1)
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.75, ease: "easeOut"}}
      className="overflow-x-auto flex flex-col justify-center items-center h-screen">
    <div className="flex flex-row gap-3">
      <button className="btn btn-circle mr-11 border-0 bg-opacity-0 hover:bg-opacity-10 hover:bg-opacity-10">
        <FontAwesomeIcon size="2x" onClick={handleNavigate} icon={faArrowLeftLong} style={{color: "#A1B8C3"}} />
      </button>
      <h1 className="text-3xl font-bold mb-14">YOUR TRIP TO MEMORY LANE</h1>
    </div>


    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr key={index}>
            <td className="p-8"> {index+1} </td>
            <td className="p-8">
              <div className="flex items-center gap-6">
                <div className="avatar">
                  <div className="mask w-12 h-12">
                    <img src={song.imageUrl} alt="Album Cover" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{song.name}</div>
                  <div className="badge badge-ghost badge-xs">{song.artist}</div>
                </div>
              </div>
            </td>
            <td>{song.album}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <SpotifyModal></SpotifyModal>
  </motion.div>
  )
}
