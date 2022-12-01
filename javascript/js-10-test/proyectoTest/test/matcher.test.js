test('object assignment', () => {
    const data = { one:1 };
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2});
});
//En la terminal, escribimos npm test -- --watch 'nombre del archivo' y hace la prueba 