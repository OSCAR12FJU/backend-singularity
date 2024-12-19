import express from 'express';
import authRoutes from './src/app/routes/authRoutes.js';
import userRoutes from './src/app/routes/userRoutes.js'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
