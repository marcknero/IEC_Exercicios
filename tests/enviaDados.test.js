const api = { 
    enviar: jest.fn(() => "Simulado!") 
  };
  
  describe("Testando Mock em Arquivo Único", () => {
  
    test("Deve retornar 'Simulado!' quando a função enviar for chamada", () => {
      // Executa a função do mock
      const resposta = api.enviar();
      
      // Validação 1: O retorno do texto está correto?
      expect(resposta).toBe("Simulado!");
    });
  
    test("Deve garantir que a função enviar foi de fato executada", () => {
      // Executa novamente para o segundo teste
      api.enviar();
  
      // Validação 2: O Jest confirma que a função foi chamada?
      expect(api.enviar).toHaveBeenCalled();
    });
  
  });