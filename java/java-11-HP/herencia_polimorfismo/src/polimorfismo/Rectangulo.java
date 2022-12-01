package polimorfismo;

import java.util.*;

public class Rectangulo extends FigurasGeometricas{
	private double lg;
	private double lp;
	Scanner s = new Scanner(System.in);
	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		System.out.println("\t\t Area del Rectangulo");
		System.out.print("Introduzca el lado más grande: ");
		lg = s.nextDouble();
		System.out.print("Introduzca el lado más pequeño: ");
		lp = s.nextDouble();
		
	}

	@Override
	public void area() {
		// TODO Auto-generated method stub
		resultado = lp * lg;
	}

}
