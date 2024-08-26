import { Request, Response } from "express"
import { autores } from "../bancoDeDados"

export default class AutorControlador {
  listar(req: Request, res: Response) {
    return res.json(autores)
  }
}