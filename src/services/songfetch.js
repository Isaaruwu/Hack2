
export const fetchSongs = async (token, year, keywords) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}request-songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ year: year, keywords: keywords }),
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
};

export const createPlaylist = async (token, songs, name, description) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}create-playlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          songs: songs, 
          name: name, 
          description: description}),
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
};





