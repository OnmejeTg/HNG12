<!-- # HNG12 Public API

## Description

This is a simple public API for HNG that returns:

- My Slack email address
- Current timestamp (ISO 8601 format)
- GitHub repository URL

## API Endpoint

**GET /**
Example Response:

```json
{
  "slack_email": "your-email@example.com",
  "timestamp": "2025-01-29T12:00:00Z",
  "github_url": "https://github.com/yourusername/hng12-public-api"
}
```

## Set up Instructions

- Clone repo
- run the command npm install to install all dependencies
- run `npm run serve` to run the local express server
- navigate to GET localhost:3000/ -->

# HNG12 Public API

## Overview

This is a simple public API for **HNG12**, built with **TypeScript and Express**, that returns:

- ✅ MY Slack email address
- ✅ Current timestamp (ISO 8601 format)
- ✅ My GitHub repository URL

---

## API Documentation

### **Base URL**

> This API is publicly accessible after deployment.

| Method  | Endpoint | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| **GET** | `/`      | Returns Slack email, timestamp, and GitHub URL |

### **Example Response**

```json
{
  "slack_email": "tonmeje@gmail.com",
  "timestamp": "2025-01-29T12:00:00Z",
  "github_url": "https://github.com/OnmejeTg/HNG"
}
```

---

## **Getting Started**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/OnmejeTg/HNG
cd HNG/stage-01
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the Server Locally**

```sh
npm run dev
```

By default, the server runs on **`http://localhost:3000/`**.

**Test the API:**

- Open a browser and visit: **`http://localhost:3000/`**
- Or use **Postman** / `cURL`:
  ```sh
  curl http://localhost:3000/
  ```

---

## **Deployment**

You can deploy this API to **Render**, **Vercel**, or any cloud provider.

### **Deploy on Render**

1. Push your code to **GitHub**.
2. Sign up on [Render](https://render.com/).
3. Create a **new Web Service**.
4. Select your repository and set:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/index.js`
   - Add `SLACK_EMAIL` as an **environment variable**.

### **Deploy on Vercel**

1. Install **Vercel CLI**:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

---

## **Tech Stack**

- **🌐 Node.js + Express.js**
- **🔷 TypeScript**
- **📦 CORS for Cross-Origin requests**
- **🚀 Deployed on Render / Vercel**

---

## **Contributing**

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Commit changes**:
   ```sh
   git commit -m "Added a new feature"
   ```
4. **Push** and create a **Pull Request**.

---

## **License**

This project is **open-source** and available under the **MIT License**.

🚀 **Happy Coding!** 🚀
