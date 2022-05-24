import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarJogadorDTO } from './dtos/criar-jogador.dto';
import { IJogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly JogadoresService: JogadoresService) {
  
  }
  @Post()
  async CriarAtualizadorJogador(
    @Body() criarJogadorDTO: CriarJogadorDTO
  ) {
    this.JogadoresService.criarAtualizarJogador(criarJogadorDTO)
  }

  @Get()
  async ConsultarJogadores(): Promise<IJogador[]> {
    return this.JogadoresService.ConsultarJogadores()
  }
}
