import { indexTest } from "../calculadora";

//const calculadora = require ("../calculadora");
// la anterior línea se ocupó para la prueba npm test

test ("test suma", () => {
    const r = indexTest.suma(1,2)
    expect (r).toBe(3);
})
test.todo("test de resta");
test.todo("test de multy");
test.todo("test de divide");