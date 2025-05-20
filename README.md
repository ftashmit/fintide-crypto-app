# 🚀 FINTIDE – Crypto Live Market Tracker

**FINTIDE** is a sleek and modern web application that enables users to track real-time cryptocurrency market prices and trends. Built with a focus on performance, responsiveness, and user experience, it fetches live data from the [CoinGecko API](https://www.coingecko.com/en/api) to present up-to-date coin information and interactive visualizations.

## 🌐 Live Demo

> Coming soon...


## 🧠 Features

- 🔄 **Live Price Tracking** for top cryptocurrencies (via CoinGecko)
- 📊 **Historical Price Chart** using interactive line charts
- 💱 **Currency Selector** (USD, EUR, INR)
- 🔍 **Clean and Responsive UI** (fully mobile compatible)
- 🌈 **Glassmorphism UI elements** and subtle animations
- 🌙 Dark-themed layout for better UX

---

## 🛠 Tech Stack

| Tech           | Purpose                            |
|----------------|------------------------------------|
| **React.js**   | UI rendering and component logic   |
| **Vite**       | Lightning-fast dev/build tool      |
| **CSS3**       | Styling with Glassmorphism & Flexbox/Grid |
| **React Router DOM** | Client-side routing |
| **Google Charts** | LineChart component for historical prices |
| **Context API** | Global currency & coin data state |
| **CoinGecko API** | Live and historical crypto market data |

---

## 📁 Project Structure
```bash
cryptoTrackerApp/
├── public/
├── src/
│ ├── assets/ # Static files like images
│ ├── components/ # Reusable components (Navbar, Footer, LineChart)
│ ├── context/ # React Context for global coin & currency state
│ ├── pages/ # Pages (Home, Coin details)
│ ├── App.jsx
│ ├── main.jsx
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
```

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/fintide-crypto-app.git
cd fintide-crypto-app
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Start the Server

```bash
npm run dev
```
### 📦 Build for Production
```bash
npm run build
```
### 🔑 API Usage
This project uses a demo CoinGecko API key. For production use, get your own key from:

👉 https://www.coingecko.com/en/api

Then replace the placeholder keys in coinContext.jsx and Coin.jsx.


### 📄 License
This project is open-source under the MIT License.

### 🙌 Acknowledgments
- CoinGecko API
- React Google Charts
- Font Awesome

---

Make sure to:

- Replace `your-username` in the clone URL with your actual GitHub username.
- Add your screenshots to the `screenshots/` folder.
- Customize the license section if you're using a different license.

Let me know if you want to add deployment instructions or environment variables too!
