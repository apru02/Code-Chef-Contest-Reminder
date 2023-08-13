# CodeChef Contest Reminder with WhatsApp Notifications

This project is designed to provide you with reminders for upcoming CodeChef contests through WhatsApp notifications. By sending a message to the provided WhatsApp number, you can receive information about upcoming contests, their start times, and durations. Additionally, this system will send you reminders for contests scheduled every day at 6 PM.

## Getting Started

### Prerequisites

1. **Twilio Account**: You'll need a Twilio account to send WhatsApp messages. Sign up for free at [Twilio](https://www.twilio.com/try-twilio).

2. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from the official [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/apru02/Code-Chef-Contest-Reminder.git
   ```

2. Navigate to the project directory:

   ```sh
   cd Code-Chef-Contest-Reminder
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Create a `.env` file in the project directory and add your Twilio credentials:

   ```env
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   ```

### Usage

1. Set up your WhatsApp sandbox by sending a message "join kids-greater" to +14155238886.

2. Run the application:

   ```sh
   npm start
   ```

3. To receive contest reminders, send any message to the Twilio WhatsApp number.

## Features

- Receive reminders about upcoming CodeChef contests through WhatsApp notifications.
- Get information about contest start times and durations.
- Daily reminders at 6 PM to keep you updated about upcoming contests.

## How It Works

1. The application fetches the list of upcoming contests from the CodeChef API.
2. It filters contests that are scheduled to start before the current time.
3. For each qualifying contest, it calculates the start time, duration, and sends a WhatsApp notification.
4. A daily schedule is set to fetch and notify about contests at 6 PM.

## Customization

You can customize this project further to add features like different notification times, multiple platforms for notifications, or even support for other coding platforms.

## Acknowledgements

This project is based on fetching data from the CodeChef API and utilizing the Twilio API for sending WhatsApp notifications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project and make it even better!
