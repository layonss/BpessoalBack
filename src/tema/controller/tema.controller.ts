import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard) 
@Controller("/tema")
@ApiBearerAuth()
export class TemaController {
constructor(private readonly TemaService: TemaService){ }

    @Get()
    @HttpCode(HttpStatus.OK)
    finAll(): Promise<Tema[]> {
        return this.TemaService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number): Promise<Tema> {
        return this.TemaService.findById(id)

    }
    @Get('/descricao/:descricao')
    @HttpCode (HttpStatus.OK)
    findByDecricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.TemaService.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Tema: Tema): Promise<Tema> {
        return this.TemaService.create(Tema)
    } 
    
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Tema:Tema): Promise<Tema> {
        return this.TemaService.update(Tema)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
    return this.TemaService.delete(id)
}
}