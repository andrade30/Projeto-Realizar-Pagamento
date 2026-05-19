import ServicoDePagamento from '../src/realizarPagamento.js'
import assert from 'node:assert'

describe('Classe de Serviço de Pagamento', () => {
    it('Validar que o pagamento com valor acima de 100 reais é categorizado como "cara"', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Apple', 150.00);

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        console.log(ultimoPagamento);

        // Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar que o pagamento com valor menor que 100 reais é categorizado como "padrão"', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1234-5678-9999', 'Amazon', 90.00);

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        console.log(ultimoPagamento);

        // Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('Validar que apenas o pagamento mais recente é exibido na consulta', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'Spotify', 45.00);
        servicoDePagamento.pagar('5555-6666-7777', 'Netflix', 250.00)

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        console.log(ultimoPagamento);

        // Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    });
});