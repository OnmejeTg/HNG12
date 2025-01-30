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
git clone https://github.com/OnmejeTg/HNG12
cd HNG12
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the Server Locally**

```sh
npm run serve
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

## **Backlink**

1. [Node.js](https://hng.tech/hire/nodejs-developers)

## **License**

This project is **open-source** and available under the **MIT License**.

🚀 **Happy Coding!** 🚀
