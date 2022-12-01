package operadores;

import java.util.Scanner;

public class Ciclos {
	
	void saludo() {
		System.out.println("Hola a las funciones en java");
	}
	//no usa return
	//Para ser llamada, debde ser estatica (static) o la defines despues
	
	int operacion() {
		int f = (int) Math.pow(3, 2) ;
		return f;
	} // como es un metodo primitivo, necesita el return. Ademas, el (int) ayuda a convertir el flotante a entero -> llamado  Casting

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//System.out.println("uso de pow()" + operacion);

		//Cuando el metodo no es estatico el objeto:
		Ciclos objC;
		objC = new Ciclos();
		objC.saludo();
		
		//Aprendiendo loops
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Introduzca el valor de la tabla de multiplicar: ");
		int tablaT = scanner.nextInt();
		for (int i = 1; i <= 10; i++) {
			System.out.println(tablaT + "*" + i + "=" + (tablaT*i));
		}
	
	System.out.print("-----------------------------------------------");	
	//Usando while
		System.out.print("Introduzca el valor de la tabla de multiplicar: ");
		int j = 1;
		int tablaW = scanner.nextInt();
	while(j <= 10) {
		System.out.println(tablaW + "*" + j + "=" + (tablaW*j));
		j++;
  	}
	
	System.out.print("-----------------------------------------------");	
	
	}

}
