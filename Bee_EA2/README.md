# Bee Bookstore

## How to Run This Project

This is a static website project. To view and use it properly, you need to set up a local server using Node.js.

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)

### Steps

1. **Install Node.js**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install http-server**
   - Open PowerShell in the `Bee_EA2` folder.
   - Run:
     ```
     npm install -g http-server
     ```

3. **Start the Local Server**
   - In the same PowerShell window, run:
     ```
     http-server -p 8080
     ```
   - Your site will be available at [http://localhost:8080](http://localhost:8080).

4. **Access the Website**
   - Open your browser and go to [http://localhost:8080](http://localhost:8080).

### Troubleshooting
- If you see a security error about PowerShell execution policy, run PowerShell as Administrator and execute:
  ```
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```
  Then retry the installation.

---

**Enjoy Bee Bookstore!**
