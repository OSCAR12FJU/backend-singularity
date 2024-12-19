import fs from 'fs'

export class User {

  constructor(email, name, lastname, nacionality, password) {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    
    this.id =  data.users.length > 0 ? data.users[data.users.length - 1].id + 1 : 1;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.nacionality = nacionality;
    this.password = password;
  }
  isValid() {
    return this.email && this.name && this.lastname && this.nacionality && this.password;
  }
}
