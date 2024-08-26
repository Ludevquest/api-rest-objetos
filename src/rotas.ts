import { Router } from 'express'
import AutorControlador from './controllers/AutorControlador'
import PostControlador from './controllers/PostControlador'

const rotas = Router()

const autorControlador = new AutorControlador()
const postControlador = new PostControlador()

rotas.get('/autores', autorControlador.listar)
rotas.get('/autores/:id', autorControlador.detalhar)
rotas.post('/autores', autorControlador.cadastrar)
rotas.put('/autores/:id', autorControlador.editar)
rotas.delete('/autores/:id', autorControlador.deletar)

rotas.get('/postagens', postControlador.listar)
rotas.get('/postagens/:id', postControlador.detalhar)
rotas.post('/postagens', postControlador.cadastrar)

export default rotas