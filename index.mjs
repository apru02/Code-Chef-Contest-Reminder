import express from 'express';
import whatsappReminder from './whatsappReminder.mjs';
import schedule from 'node-schedule';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.use('/sendapi', whatsappReminder);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  // Schedule the API request every day at 23:48
  const scheduledTime = new Date();
  scheduledTime.setHours(18);
  scheduledTime.setMinutes(0);

  schedule.scheduleJob(scheduledTime, async () => {
    console.log('Executing API request at 23:52');
    try {
      // Make the HTTP request
      const response = await axios.get('http://localhost:3000/sendapi/handleContestFetch');
      console.log('API Response:', response.data.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
});
