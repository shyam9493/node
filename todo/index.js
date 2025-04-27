const express = require('express');
const geoip = require('geoip-lite');

const app = express();
const PORT = 3000;

// Middleware to get client IP
app.set('trust proxy', true); // if behind proxy like nginx or Vercel

app.get('/location', (req, res) => {
  let ip = req.ip || req.connection.remoteAddress;

  // Clean the IP if it's IPv6 format like ::ffff:127.0.0.1
  if (ip.includes('::ffff:')) {
    ip = ip.split('::ffff:')[1];
  }

  const geo = geoip.lookup(ip);

  if (geo) {
    res.json({
      ip: ip,
      location: {
        country: geo.country,
        region: geo.region,
        city: geo.city,
        ll: geo.ll, // latitude and longitude
      },
    });
  } else {
    res.json({ error: 'Location not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
