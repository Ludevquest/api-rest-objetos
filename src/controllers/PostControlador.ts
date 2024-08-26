import { Request, Response } from "express"
import { autores, posts } from "../bancoDeDados"
import Autor from "../models/Autor"
import Post from "../models/Post"

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
    const { titulo, descricao, autor_id } = req.body

    if (!titulo || !descricao || !autor_id) {
      return res.status(400).json({
        mensagem: 'Todos os campos da postagem são obrigatórios'
      })
    }

    const autor = autores.find((e) => {
      return e.id === autor_id
    })

    if (!autor) {
      return res.status(404).json({
        mensagem: 'O autor não existe'
      })
    }

    const post = new Post({
      titulo,
      descricao,
      autor
    })

    posts.push(post)

    return res.status(201).json(post)
  }

  editar(req: Request, res: Response) {
    const { id } = req.params
    const { titulo, descricao } = req.body

    if (!titulo || !descricao) {
      return res.status(400).json({
        mensagem: 'O título e a descrição da postagem são obrigatórios'
      })
    }

    const post = posts.find((e) => {
      return e.id === id
    })

    if (!post) {
      return res.status(404).json({
        mensagem: 'A postagem não existe'
      })
    }

    post.titulo = titulo
    post.descricao = descricao

    return res.status(204).send()
  }

  deletar (req: Request, res: Response) {
    const { id } = req.params

    const post = posts.findIndex((e) => {
      return e.id === id
    })

    if (post === -1) {
      return res.status(404).json({
        mensagem: 'A postagem não existe'
      })
    }

    posts.splice(post, 1)

    return res.status(204).send()
}

}