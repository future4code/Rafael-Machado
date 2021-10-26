import app from './app'
import { Request, Response } from 'express'
import connection from './connection'

// Exercício 1

// - Quando temos ações que devem ser executadas ao criar uma
// instância da classe, usamos o construtor, que é uma função.

// - Construtor serve para inicializar variáveis e chamamos o construtor com o this

// b - Apareceu uma vez no terminal

// c - Variáveis privadas só podem ser acessadas de dentro da
// própria classe (usando a keyword this)

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

 }

const senna: UserAccount = new UserAccount("55577733312", "Ayrton Senna", 33)


// Exercício 2 - O que você precisa é que sua classe UserAccount tenha um setter, 
// que é um método para alterar a instância após ela já ter sido criada!
// Esse médoto vai receber uma Transaction por parâmetro e fazer um push no array de transações

 class Transaction {
   private description: string
   private value: number
   private date: string

   public getDescription = (): string => this.description
   public getValue = (): number => this.value
   public getDate = (): string => this.date

   constructor (
      InstanceDescription: string,
      InstanceValue: number,
      InstanceDate: string
   ) {
      this.description =  InstanceDescription
      this.value = InstanceValue
      this.date = InstanceDate
      console.log("Construindo uma Transaction")
   }

 }

 // Exercício 3

 class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
       this.accounts = accounts
    }
 }


