import { getAllUsers } from "../../domain/usecases/getAllUser.js";
import { registerUser } from "../../domain/usecases/registerUser.js";
import { validationUserInstance } from "../../infraestructure/repoitories/ValidationUser.js";



// const validationUser = new ValidationUser(); 

export const createController = {
    register: async (req, res) =>{
        const {email, name, lastname, nacionality, password} = req.body;
        try{
            const newUser = await registerUser(validationUserInstance,email, name, lastname, nacionality, password);
            res.status(201).json({
                message: "Usuario registrado exitosamente",
                user: newUser,
            });
        }catch(error){
            res.status(400).json({error: error.message});
        }
    },

    allUsers: async (req, res) =>{
        try{
            const users = await getAllUsers();
            res.status(201).json({
                message: "Peticiòn exitosa",
                user: users,
            });
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }
}
