import React, { useState, useContext  } from "react";
import { useNavigate  } from "react-router-dom";
import { fetchSongs } from "../services/songfetch";
import { AuthContext } from '../AuthContext';

export default function BdayPicker() {
  const navigate = useNavigate ();
  const { authToken, addSongs } = useContext(AuthContext);

  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addKeyword = () => {
    if (inputValue.trim() !== '' && !keywords.includes(inputValue.trim())) {
      setKeywords([inputValue.trim(), ...keywords]);
      setInputValue('');
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword();
    }
  };

  const [birthday, setBirthday] = useState({year: ''});
  const handleYearChange = (e) => {
    const { name, value } = e.target;
    setBirthday({ ...birthday, [name]: value });
  };
  
  
  const [loading, setLoading] = useState(false);
  const handleGenerateSongs = async () => {
    if (!birthday.year) return;
    setLoading(true);
    addSongs(await fetchSongs(authToken, birthday.year, keywords));
    setLoading(false);
    navigate('/Playlist');
  };

  return (
      <div className="form-control w-full max-w-xs">
        <div className="flex flex-row gap-3">
          <select
            className="select text-center select-bordered"
            name="year"
            value={birthday.year}
            onChange={handleYearChange}
          >
            <option disabled value="">Year</option>
            {[...Array(100)].map((_, i) => (
              <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
            ))}
          </select>
          <input  
            type="text"
            placeholder="Pop, Rap, Metal..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex flex-wrap mt-6 mb-6 gap-2">
            {keywords.map((keyword, index) => (
              <div key={index} className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => removeKeyword(keyword)} fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                  <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                {keyword}
              </div>
            ))}
          </div>

        {birthday.year && (
        <button 
          className="btn btn-outline btn-primary" 
          onClick={handleGenerateSongs}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate Songs'}
        </button>
        )}
      </div>
  );
}
