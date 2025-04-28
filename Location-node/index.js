const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-location', async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ success: false, message: 'Invalid location data' });
  }

  try {
    // Reverse Geocoding API
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json'
      },
      headers: {
        'User-Agent': 'Node.js Server' // Important header for Nominatim
      }
    });

    const city = response.data.address.city || 
                 response.data.address.town || 
                 response.data.address.village || 
                 response.data.address.state; // fallback if no city

    console.log(`User is in city: ${town}`);

    res.json({
      success: true,
      message: 'Location received successfully',
      city: city,
      full_address: response.data.display_name
    });
  } catch (error) {
    console.error('Error during reverse geocoding:', error.message);
    res.status(500).json({ success: false, message: 'Failed to get city from location' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
