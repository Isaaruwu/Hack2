
export const fetchSongs = async (token, year) => {
    try {
      const response = await fetch(`http://localhost:5000/request-songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ year: year }),
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
};

export const createPlaylist = async (token, songs) => {
    try {
      const response = await fetch(`http://localhost:5000/create-playlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ songs: songs }),
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
};





