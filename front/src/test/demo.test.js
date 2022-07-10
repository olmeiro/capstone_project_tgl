describe('Pruebas en <DemoComponent />', () => {

    test('Using jest testing unit', () => {
        // 1 inicializacion
        const message1 = "Hola mundo"
        // 2 estimurlo
        const message2 = message1.trim()
        // 3 Observar el comportamiento
        expect( message1 ).toBe(message2);
    })
})
