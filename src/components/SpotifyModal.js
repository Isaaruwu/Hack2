import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../AuthContext';
import { createPlaylist } from "../services/songfetch";


export default function SpotifyModal() {
  const { authToken, songs } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const handlePlaylistCreation = async () => {
    await createPlaylist(authToken, songs, name, description)
  };
  
  const ModalcreatePlaylist = () => {
    closeModal()
    handlePlaylistCreation()
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
        <button className="btn mt-6 mb-10" checked={isModalOpen} onClick={() => setIsModalOpen(!isModalOpen)}>
            <FontAwesomeIcon className="pr-3" size="2x" icon={faSpotify} style={{color: "#1CB351"}} />  
            Create A Playlist
        </button>
      <input
        type="checkbox"
        id="spotify_modal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
       <div className="modal" role="dialog">
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>X</button>
        <div className="form-control text-center w-full max-w-xs mx-auto">
          <h3 className="font-bold mb-6 text-lg">Customize Your Playlist! 🎸</h3>
          <input
            type="text"
            placeholder="Name"
            className="input mb-4 input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered mb-8 w-full max-w-xs"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-outline btn-success" onClick={ModalcreatePlaylist}>Create My Playlist</button>
        </div>
      </div>
    </div>
    </div>
  );
}
