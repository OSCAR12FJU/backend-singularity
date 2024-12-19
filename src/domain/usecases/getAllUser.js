import { validationUserInstance } from "../../infraestructure/repoitories/ValidationUser.js";

export const getAllUsers = async () => {
    // Verificar si el usuario ya existe
    const users = await validationUserInstance.getAllUsers();
    if (users.length < 0) {
        throw new Error("El repositorio esta vacio.");
    }
    return users; // Retornar el usuario creado
};
