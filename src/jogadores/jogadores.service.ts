import { Injectable, Logger } from '@nestjs/common'
import { CriarJogadorDTO } from './dtos/criar-jogador.dto'
import { IJogador } from './interfaces/jogador.interface'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class JogadoresService {
  private jogadores: IJogador[] = []
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDTO: CriarJogadorDTO): Promise<void> {
      const { email } = criarJogadorDTO
      const jogadorProcurado = this.jogadores.find(jogador => jogador.email == email)
      if (jogadorProcurado)
        this.atualizarJogador(jogadorProcurado, criarJogadorDTO)
      else
        this.criar(criarJogadorDTO)
  }

  async ConsultarJogadores(): Promise<IJogador[]> {
    return await this.jogadores
  }

  private criar(jogadorDTO: CriarJogadorDTO): void {
    const { email, telefone, nome } = jogadorDTO
    const jogador: IJogador = {
      _id: uuidv4(),
      email: email,
      nome: nome,
      telefone: telefone,
      posicaoRanking: 1,
      ranking: 'A',
      urlFotoJogador: 'www.google.com.br/foto123.jpg'
    }
    this.logger.log(`Criar Jogador: ${JSON.stringify(jogador)}`)
    this.jogadores.push(jogador)
  }

  private atualizarJogador(jogador: IJogador, criarJogadorDTO: CriarJogadorDTO): void {
    const { nome } = criarJogadorDTO
    jogador.nome = nome
  }
}
