# Node.js + MongoDB Docker Learning Project

## 📌 Overview

This repository contains a simple Node.js + Express + MongoDB application that was used to learn Docker fundamentals from scratch.

The project covers:

* Docker Installation
* WSL Setup
* Docker Images
* Docker Containers
* Dockerfile
* Port Mapping
* Docker Logs
* Container Persistence
* Docker Networking
* Node.js Containerization
* MongoDB Connectivity from Docker

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Docker
* WSL2
* Ubuntu 24.04

---

# 📂 Project Structure

```text
node-mongo/
│
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
│
└── models/
    ├── Product.js
    └── Order.js
```

---

# 🚀 Docker Concepts Learned

## 1. Docker Image

A Docker Image is a blueprint or template used to create containers.

Example:

```text
Code
 ↓
Dockerfile
 ↓
Docker Image
```

---

## 2. Docker Container

A Docker Container is a running instance of an image.

Example:

```text
Docker Image
 ↓
docker run
 ↓
Docker Container
```

---

## 3. Dockerfile

Dockerfile used in this project:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

### Explanation

#### FROM

Selects the base image.

```dockerfile
FROM node:22
```

#### WORKDIR

Creates and switches to the working directory.

```dockerfile
WORKDIR /app
```

#### COPY

Copies files into the container.

```dockerfile
COPY . .
```

#### RUN

Executes commands while building the image.

```dockerfile
RUN npm install
```

#### EXPOSE

Documents the port used by the application.

```dockerfile
EXPOSE 3000
```

#### CMD

Runs the application when the container starts.

```dockerfile
CMD ["node", "index.js"]
```

---

# 🐳 Docker Commands Learned

## Check Docker Version

```bash
docker --version
```

---

## Pull and Run Hello World

```bash
docker run hello-world
```

---

## View Images

```bash
docker images
```

---

## View Running Containers

```bash
docker ps
```

---

## View All Containers

```bash
docker ps -a
```

---

## Run Ubuntu Container

```bash
docker run -it ubuntu bash
```

---

## Start Existing Container

```bash
docker start <container-id>
```

---

## Enter Existing Container

```bash
docker exec -it <container-id> bash
```

---

## View Container Logs

```bash
docker logs <container-name>
```

---

## Remove Container

```bash
docker rm -f <container-name>
```

---

# 🐧 Linux Commands Practiced

```bash
pwd
```

Show current directory.

---

```bash
ls
```

List files and folders.

---

```bash
mkdir rohit
```

Create directory.

---

```bash
echo "Rohit Sharma" > test.txt
```

Create file and write content.

---

```bash
cat test.txt
```

Read file content.

---

```bash
exit
```

Exit container shell.

---

# 🏗 Building Docker Image

Build image:

```bash
docker build -t node-mongo-app .
```

---

Verify image:

```bash
docker images
```

---

# ▶ Running Application Container

```bash
docker run -d -p 3000:3000 --name node-app node-mongo-app
```

### Parameters

* `-d` → Detached mode
* `-p` → Port Mapping
* `--name` → Container Name

---

# 🌐 Docker Networking Lesson

## Problem

Application initially used:

```javascript
mongodb://localhost:27017/rohitdb
```

Inside Docker, this failed.

Error:

```text
MongooseError: buffering timed out after 10000ms
```

---

## Why?

Inside a container:

```text
localhost
```

means:

```text
The container itself
```

and NOT the host machine.

---

## Solution

Use:

```javascript
mongodb://host.docker.internal:27017/rohitdb
```

This allows the Docker container to access MongoDB running on the Windows host machine.

---

# 📖 Key Learning

Container localhost ≠ Host Machine localhost

This was the most important Docker networking concept learned during this project.

---

# ✅ Final Result

Successfully:

* Containerized a Node.js application
* Connected Docker container to MongoDB
* Accessed APIs from browser
* Understood Docker networking
* Built and ran custom Docker images

API Test:

```text
http://localhost:3000/products
```

Successfully returned MongoDB data.

---

# 🎯 Future Topics

Planned next steps:

* Docker Networks
* MongoDB Container
* Node Container ↔ Mongo Container Communication
* Docker Compose
* Docker Volumes
* Microservices with Docker

---

## Author

Rohit Sharma

Learning Docker, Node.js, MongoDB, Backend Development, and Microservices from scratch.
