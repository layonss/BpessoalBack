import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_usuarios"})
export class Usuarios {
   
   
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number
  
   @IsNotEmpty()
   @Column({length: 255, nullable: false})
   @ApiProperty()
   nome: string

   @IsEmail()
   @Column({length: 255, nullable: false})
   @ApiProperty({example: "Email@email.com.br"})
    usuario: string
    
   @IsNotEmpty()
   @MinLength(8)
   @Column({length: 255, nullable: false})
   @ApiProperty()
   senha: string

    @Column({length: 5000}) 
    @ApiProperty()
    foto: string

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.usuarios)
    postagem: Postagem[]
}