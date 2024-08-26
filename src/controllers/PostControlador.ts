import { Request, Response } from "express"
import { autores, posts } from "../bancoDeDados"
import Autor from "../models/Autor"

export default class PostControlador {
  listar(req: Request, res: Response) {
    return res.json(posts)
  }

  detalhar(req: Request, res: Response) {
  }

  cadastrar(req: Request, res: Response) {
  }

  editar(req: Request, res: Response) {
  }

  deletar (req: Request, res: Response) {
}

}