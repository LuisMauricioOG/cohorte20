package polimorfismo;

import java.util.*;

public abstract class FigurasGeometricas {
//Una clase abstracta no puede tener instancia; tiene métodos abstractos, debe tener al menos 1; no le digo qué hará, solo lo definimos.
	
	protected double pValor;
	protected double sValor;
	protected double resultado;
	
	Scanner s;
	
	public abstract void pedirDatos();
	public abstract void area();
	
	public void visualizar() {
		System.out.println("El resultado del área, es: " + resultado);
	}
	
}

//s = new Scanner(System.in);
//System.out.print("Introduzca el primer valor: ");
//pValor = s.nextDouble();
//
//System.out.print("Introduzca el segundo valor: ");
//sValor = s.nextDouble();
