import { Request, Response } from "express"
import { autores, posts } from "../bancoDeDados"
import Autor from "../models/Autor"

export default class PostControlador {
  listar(req: Request, res: Response) {
    return res.json(posts)
  }

  detalhar(req: Request, res: Response) {
    const { id } = req.params

    const post = posts.find((e) => {
      return e.id === id
    })

    if (!post) {
      return res.status(404).json({
        mensagem: 'A postagem não existe'
      })
    }

    return res.json(post)
  }

  cadastrar(req: Request, res: Response) {
  }

  editar(req: Request, res: Response) {
  }

  deletar (req: Request, res: Response) {
}

}