import React from 'react'
import { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../AuthContext';
import { createPlaylist } from "../services/songfetch";

export default function Settings() {
  const { authToken, songs } = useContext(AuthContext);

  const handlePlaylistCreation = async () => {
    await createPlaylist(authToken, songs)
  };

  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center h-screen">
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
            <td className="p-8"> {index} </td>
            <td className="p-8">
              <div className="flex items-center gap-6">
                <div className="avatar">
                  <div className="mask w-12 h-12">
                    <img src={song.imageUrl} alt="Album Cover" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{song.name}</div>
                  <span className="badge badge-ghost badge-sm">{song.artist}</span>
                </div>
              </div>
            </td>
            <td>{song.album}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="btn mt-6" onClick={handlePlaylistCreation}>
      <FontAwesomeIcon className="pr-3" size="2x" icon={faSpotify} style={{color: "#1CB351"}} />  
      Create A Playlist
    </button>
    {/* <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog> */}
  </div>
  )
}
