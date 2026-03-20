function classificarAlerta(nivel) {
    if (nivel > 80) return 'Crítico';
    if (nivel > 50) return 'Alto';
    return 'Moderado';
}

test('alera critico de nivel maior que 80', () => {
    expect(classificarAlerta(90)).toBe('Crítico');
});
test('alerta alto de nivel entre 51 e 80', () => {
    expect(classificarAlerta(60)).toBe('Alto');
});
test('alesta moderado se nivel inferor a 50', () => {
    expect(classificarAlerta(30)).toBe('Moderado');
});
