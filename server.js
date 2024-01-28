const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const port = 3001;
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nidhish@25",
  database: "pragyan",
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit-form", (req, res) => {
    const { voterId, aadhaarNumber } = req.body;
  
    // Check the database for the entered voter ID and Aadhaar number
    const query = `
    SELECT * 
    FROM voter 
    INNER JOIN popup ON voter.voter_id = popup.voter_id 
    WHERE voter.voter_id = ? AND popup.aadhar_no = ? AND voter.voter_status = 'active'
    `;
    const values = [voterId, aadhaarNumber];
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (results.length > 0) {
        // Match found
        return res.json({
          success: true,
          message: "found",
          active: "yes",
        });
      } else {
        // No match found
        return res.json({
          success: false,
          message: "not found",
          active: "no",
        });
      }
    });
  });

  app.get('/otp-verification', (req, res) => {
    const voterId = req.query.voterId; 

    if (!voterId) {
        return res.status(400).json({ error: 'Missing voterId parameter' });
    }
    const query = 'SELECT mobile_no FROM voter WHERE voter_id = ? AND voter_status = "active"';
    const values = [voterId];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Voter not found or inactive' });
        }

        const phoneNumber = results[0].mobile_no;
        // Do something with the phoneNumber, e.g., send it as a response
        res.json({ phoneNumber });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

