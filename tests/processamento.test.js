function processarAlerta(valor){
    if(valor>80) return 'Notificação enviada: Crítico';
    if (valor>50) return 'Notificação enviada: Alto';
    return 'moderado';
}

test('processamento completo de alerta critico', ()=>{
    let resultado = processarAlerta(90);
    expect(resultado).toBe("Notificação enviada: Crítico");
});
