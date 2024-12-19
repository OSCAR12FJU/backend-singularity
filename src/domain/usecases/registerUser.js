
import { User } from "../entitites/User.js";

export const registerUser = async (validationUser, email, name, lastname, nacionality, password) => {
    const user = new User(email, name, lastname, nacionality, password);

    // Validar los datos del usuario
    if (!user.isValid()) {
        throw new Error("Datos de usuario inválidos");
    }

    // Verificar si el usuario ya existe
    const existingUser = await validationUser.findByEmail(email); // Aquí estaba el problema
    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    // Guardar el nuevo usuario
    await validationUser.save(user);

    return user; // Retornar el usuario creado
};
