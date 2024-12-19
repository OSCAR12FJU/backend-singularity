import { validationUserInstance } from "../../infraestructure/repoitories/ValidationUser.js";
import { jwtService } from "../../infraestructure/utils/jwtService.js";



export const authenticateUser = async (email, password)  =>{
  const user = await validationUserInstance.findByEmail(email);
  if (!user){
    throw new Error("Usuario no encontrado")
  }


  const isPasswordValid = user.password === password; 
  if (!isPasswordValid) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwtService.generateToken({ id: user.id, email: user.email });

  return token;
}