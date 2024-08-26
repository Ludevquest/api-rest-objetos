import Autor from "./models/Autor";
import Post from "./models/Post";

export const autores: Autor[] = []

export const posts: Post[] = [
  new Post({
    titulo: 'Meu primeiro post',
    descricao: 'Descrição do meu primeiro post',
    autor: new Autor({
      nome: 'Luiz',
      idade: 24
    })
  })
]