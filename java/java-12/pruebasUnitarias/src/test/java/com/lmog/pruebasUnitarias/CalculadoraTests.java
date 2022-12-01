package com.lmog.pruebasUnitarias;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class CalculadoraTests {
	Calculadora calc = new Calculadora(true);//Objeto creado
	
	@Test
	void pruebaSuma() {
		
		assertEquals(4, calc.suma(2, 2));
	}
	
	@Test
	@DisplayName("Probar si la calculadora está encendida")
	void pruebaIsOn() {
		//asertTrue(calc.isOn());
	}
			

	@Test
	@DisplayName("Prueba de división")
	void pruebaDiv() {
		assertEquals(2.5, calc.division(5, 2));
	}

}
