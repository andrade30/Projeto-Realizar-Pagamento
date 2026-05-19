/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. 
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. 
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, 
a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
*/

export default class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = []
    }

    pagar(codigoDeBarras, empresa, valor) {
        let categoria;

        if (valor > 100) {
            categoria = 'cara';
        } else {
            categoria = 'padrão'
        }

        const pagamento = {
            codigoDeBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        }

        this.#pagamentos.push(pagamento);
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}