package polimorfismo.ejecutarABS;

import polimorfismo.FigurasGeometricas;
import polimorfismo.Rectangulo;
import polimorfismo.Triangulo;
import polimorfismo.Circulo;
import polimorfismo.Cuadrado;
import java.util.*;

public class EjecutarABS {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FigurasGeometricas t = new Triangulo();
		t.pedirDatos();
		t.area();
		t.visualizar();
		
		FigurasGeometricas c = new Cuadrado();
		c.pedirDatos();
		c.area();
		c.visualizar();
		
		FigurasGeometricas cir = new Circulo();
		cir.pedirDatos();
		cir.area();
		cir.visualizar();
		
		FigurasGeometricas r = new Rectangulo();
		r.pedirDatos();
		r.area();
		r.visualizar();
	}
//Se podria crear un menu para definir que area se quiere obtener, o un loop para que resuelva todas
}
