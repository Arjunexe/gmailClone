# Gmail Clone (MERN Stack)

## 📌 Project Overview
Gmail Clone is a full-stack email application built with the MERN stack, utilizing the *Gmail API* for email management. Users can *send, receive, delete, and organize emails* while benefiting from real-time updates and Google OAuth authentication.

## 🚀 Features
- 🔐 *User Authentication* – Google OAuth 2.0 login
- 📩 *Send & Receive Emails* – Using Gmail API & Nodemailer
- 📥 *Inbox & Sent Emails* – Fetch messages from Gmail API
- 🏷 *Email Labels & Organization* – Archive, star, or delete emails
- 🔍 *Search & Filters* – Search emails by sender, subject, or date
- 📎 *Attachments Handling* – Upload/download files
- 📡 *Real-time Updates* – WebSockets for live email notifications
- 🌙 *Dark Mode UI* – User-friendly interface with dark mode support

---

## 🛠 Tech Stack

### Frontend:
- *React.js* (Next.js optional)
- *Redux Toolkit* (for state management)
- *Tailwind CSS / Material UI* (for styling)

### Backend:
- *Node.js & Express.js*
- *MongoDB & Mongoose*
- *Nodemailer* (for sending emails)
- *Google OAuth 2.0* (for authentication)
- *Socket.io* (for real-time email notifications)

### Deployment:
- *Frontend* – Vercel / Netlify
- *Backend* – Render / Railway / AWS EC2
- *Database* – MongoDB Atlas

---

## 🔑 Getting Started

### 1️⃣ Clone the Repository
bash
git clone https://github.com/your-username/gmail-clone.git
cd gmail-clone


### 2️⃣ Set Up the Backend
#### Install Dependencies
bash
cd server
npm install


#### Configure Environment Variables
Create a .env file in the server directory and add:
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
GMAIL_REFRESH_TOKEN=your_gmail_api_refresh_token
GMAIL_ACCESS_TOKEN=your_gmail_api_access_token


#### Run the Server
bash
npm run dev


### 3️⃣ Set Up the Frontend
#### Install Dependencies
bash
cd client
npm install


#### Run the React App
bash
npm start


---

## 🔗 API Endpoints
### Authentication
- POST /auth/google – Google OAuth login

### Emails
- GET /emails/inbox – Fetch user's inbox
- POST /emails/send – Send an email
- DELETE /emails/:id – Delete an email

### Real-Time Updates
- WebSockets (socket.io) for live notifications

---

## 🔥 Deployment
1. Deploy the *backend* on *Render/AWS/Railway*.
2. Deploy the *frontend* on *Vercel/Netlify*.
3. Configure *OAuth credentials* in Google Cloud Console.
4. Set up *CORS and environment variables* for production.

---

## 📜 License
This project is licensed under the MIT License.

---

## 🙌 Contributing
Contributions are welcome! Feel free to fork and submit PRs.

---

## 💬 Contact
For queries, reach out at [your-email@example.com](mailto:your-email@example.com).