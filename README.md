# Node.js + MongoDB Dockerized Application

A simple Node.js, Express.js, and MongoDB application containerized using Docker for learning backend development and containerization concepts.

## 🚀 What I Learned

During this project, I explored and implemented:

* Docker Installation and Setup
* WSL2 Configuration
* Docker Images and Containers
* Dockerfile Creation
* Container Lifecycle Management
* Port Mapping
* Docker Logs
* Container Persistence
* Docker Networking
* Node.js Application Containerization
* MongoDB Connectivity from Docker Containers

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Docker
* WSL2
* Ubuntu

---

## 📂 Project Structure

```text
.
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
└── models
    ├── Product.js
    └── Order.js
```

---

## 🐳 Dockerfile

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

---

## 🔨 Build Docker Image

```bash
docker build -t node-mongo-app .
```

---

## ▶ Run Docker Container

```bash
docker run -d -p 3000:3000 --name node-app node-mongo-app
```

---

## 📋 Useful Docker Commands

### View Images

```bash
docker images
```

### View Running Containers

```bash
docker ps
```

### View All Containers

```bash
docker ps -a
```

### View Logs

```bash
docker logs node-app
```

### Access Container Shell

```bash
docker exec -it node-app bash
```

### Remove Container

```bash
docker rm -f node-app
```

---

## 🌐 Docker Networking Concept

One of the most important concepts learned during this project:

**Container localhost is different from Host Machine localhost.**

Initially, the application used:

```javascript
mongodb://localhost:27017/rohitdb
```

This failed because `localhost` inside the container refers to the container itself.

The issue was resolved using:

```javascript
mongodb://host.docker.internal:27017/rohitdb
```

This allows the Docker container to communicate with MongoDB running on the host machine.

---

## ✅ Features

* Add Products
* View Products
* Update Products
* Delete Products
* Create Orders
* MongoDB Aggregation Practice
* Dockerized Backend Application

---

## 🎯 Future Improvements

* MongoDB Containerization
* Docker Compose
* Docker Volumes
* Docker Networks
* Redis Integration
* Microservices Architecture
* CI/CD Pipeline

---

## 👨‍💻 Author

Rohit Sharma

Backend Development | Node.js | MongoDB | Docker | Microservices
