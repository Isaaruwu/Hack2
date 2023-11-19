import React, { useState, useContext  } from "react";
import { useNavigate  } from "react-router-dom";
import { fetchSongs } from "../services/songfetch";
import { AuthContext } from '../AuthContext';

export default function BdayPicker() {
  const navigate = useNavigate ();
  const { authToken, addSongs } = useContext(AuthContext);


  const [birthday, setBirthday] = useState({year: ''});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBirthday({ ...birthday, [name]: value });
  };
  
  
  const [loading, setLoading] = useState(false);
  const handleGenerateSongs = async () => {
    if (!birthday.year) return;

    setLoading(true);
    addSongs(await fetchSongs(authToken, birthday.year));
    setLoading(false);
    navigate('/Settings');
  };

  return (
      <div className="form-control w-full max-w-xs">
        <select
          className="select text-center select-bordered"
          name="year"
          value={birthday.year}
          onChange={handleInputChange}
        >
          <option disabled value="">Year</option>
          {[...Array(100)].map((_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
          ))}
        </select>
        {birthday.year && (
        <button 
          className="btn btn-primary mt-4" 
          onClick={handleGenerateSongs}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate Songs'}
        </button>
        )}
      </div>
  );
}
