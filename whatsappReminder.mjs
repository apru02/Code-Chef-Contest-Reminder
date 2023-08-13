import express from "express";
import fetch from "node-fetch";
import twilio from "twilio";

import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const findStartTime = (relativeSecondsBefore) => {
  const currentTime = new Date().getTime();
  const relativeMilliseconds = relativeSecondsBefore * 1000;
  const contestStartTime = new Date(currentTime + relativeMilliseconds);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedStartTime = contestStartTime.toLocaleDateString(
    "en-US",
    options
  );
  return formattedStartTime;
};

router.get("/handleContestFetch", async (req, res) => {
  try {
    const url = "https://codeforces.com/api/contest.list?gym=false";
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && Array.isArray(data.result)) {
      data.result.forEach((contest) => {
        if (contest.phase === "BEFORE") {
          const contestStartTime = findStartTime(
            Math.abs(contest.relativeTimeSeconds)
          );
          const contestName = contest.name;
          const duration = contest.durationSeconds / 60;

          const message = `Contest Name: ${contestName}\nContest Start Time: ${contestStartTime}\nContest Duration: ${duration} minutes`;

          client.messages
            .create({
              body: message,
              from: "whatsapp:+14155238886",
              to: "whatsapp:+919337316233",
            })
            .then((message) => console.log(message.sid));
        }
      });
    } else {
      console.log("Unable to retrieve contest data");
    }

    res.status(200).json({
      message: "Contest reminders sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred",
    });
  }
});

export default router;
