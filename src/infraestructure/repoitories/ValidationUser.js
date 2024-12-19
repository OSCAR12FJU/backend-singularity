import fs from 'fs'
// import path from 'path'


const filePath = './db.json';
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ users: [] }, null, 2)); // Crear el archivo con la estructura por defecto
}

class ValidationUser {
    constructor() {
      // const storedUsers = localStorage.getItem("users");
      // this.users = storedUsers ? JSON.parse(storedUsers) :[];  
      this.filePath = filePath;
    }  
    readData() {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    }
  
    // Guarda los datos de nuevo en el archivo JSON
    writeData(data) {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
  
    async save(user) {
      const data = this.readData();
      data.users.push(user);
      this.writeData(data);
    }
  
    async findByEmail(email) {
      const data = this.readData();
      return data.users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    }
  
    async getAllUsers() {
      const data = this.readData();
      return data.users;
    }
  }

  const validationUserInstance = new ValidationUser();

  export {validationUserInstance, ValidationUser}
  