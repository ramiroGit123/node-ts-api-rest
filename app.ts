import express, { Application, Request, Response } from 'express';
const app: Application = express();
const PORT: number = 3000;
app.use(express.json());
// Data
const usuarios: { id: number; nombre: string }[] = [
{ id: 1, nombre: 'Ana Gomez' },
{ id: 2, nombre: 'Julio Vargas' },
{ id: 3, nombre: 'Jorge Chavez' },
];
// GET /api/v1/usuarios
app.get('/api/v1/usuarios', (req: Request, res: Response) => {
res.status(200).json(usuarios);
});
// POST /api/v1/usuarios
app.post('/api/v1/usuarios', (req: Request, res: Response) => {
const newUser = req.body;
usuarios.push(newUser);
res.status(201).json(newUser);
});
app.listen(PORT, () => {
console.log(`Servidor nodejs corriendo en el puerto : ${PORT}`);
});
