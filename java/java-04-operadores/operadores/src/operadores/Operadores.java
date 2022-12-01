package operadores;

import java.util.Scanner;

//public class Operadores {

//	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Scanner scanner = new Scanner(System.in); //para poder escribir algo en la consola
////		System.out.println("--- Da un dato: --- ");
////		String dato = scanner.nextLine(); //guarda el texto para poderlo mostrar a continuación
////		System.out.println("El dato es: " + dato);
//		
//		int valor = 6;
//		int valor0 = 5;
//		
//		int suma = valor + valor0;
//		System.out.println("Suma: " + suma);
//		int div = valor / valor0;
//		System.out.println("División: " + div);
//		int resta = valor - valor0;
//		System.out.println("Resta: " + resta);
//		int multi = valor * valor0;
//		System.out.println("Multiplicación: " + multi);
//		
//		//Ahora, pidiendo los valores en la consola:
//		System.out.println("Introduce el valor 1: ");
//		int valor1 = scanner.nextInt();
//		System.out.println("Introduce el valor 2: ");
//		int valor2 = scanner.nextInt();
//		
//		int suma1 = valor1 + valor2;
//		System.out.println("Suma: " + suma1);
//		int div1 = valor1 / valor2;
//		System.out.println("División: " + div1);
//		int resta1 = valor1 - valor2;
//		System.out.println("Resta: " + resta1);
//		int multi1 = valor1 * valor2;
//		System.out.println("Multiplicación: " + multi1);
//		

//int valor,valor0, numero;	
//	  do{
//	
//	      System.out.println("1-suma \n"
//	      		+ "2-resta \n"
//	      		+ "3-multiplicacion\n "
//	      		+ "4-division \n"
//	      		+ "5-modulo\n"
//	      		+ "6-boleanos\n"
//	      		+ "7-salir"
//	      		);
//
//	        System.out.println("elija una operacion");
//	  	  numero = scanner.nextInt();
//		  	;
//
//	  switch(numero) {
//
//	  case 1:
//		  System.out.println("introduzca el numero1");
//	        valor = scanner.nextInt();
//	  	  System.out.println("introduzca el numero2");
//	  	  valor0 = scanner.nextInt();   
//		  int suma = valor+valor0;
//		System.out.println("suma: "+suma);
//		break;
//	case 2:
//		System.out.println("introduzca el numero1");
//        valor = scanner.nextInt();
//  	  System.out.println("introduzca el numero2");
//  	  valor0 = scanner.nextInt();   
//		int res = valor-valor0;
//		System.out.println("resta: "+res);
//		break;
//	case 3:
//		System.out.println("introduzca el numero1");
//    valor = scanner.nextInt();
//	  System.out.println("introdusca el numero2");
//	  valor0 = scanner.nextInt();   
//		int mult = valor+valor0;
//		System.out.println("multiplicacion: "+mult);
//		break;
//	case 4:
//		System.out.println("introduzca el numero1");
//	    valor = scanner.nextInt();
//		  System.out.println("introduzca el numero2");
//		  valor0 = scanner.nextInt();   
//		int div = valor/valor0;
//		System.out.println("division: "+div);
//		break;
//	case 5:
//		System.out.println("introduzca el numero1");
//	    valor = scanner.nextInt();
//		  System.out.println("introduzca el numero2");
//		  valor0 = scanner.nextInt();   
//		int mod = valor%valor0;
//		System.out.println("modulo: "+mod);
//		break;
//	case 6:
//		System.out.println("introduzca el numero1");
//        valor = scanner.nextInt();
//  	  System.out.println("introduzca el numero2");
//  	  valor0 = scanner.nextInt();   
//		boolean comparar = valor >= valor0;
//		boolean logica=false;
//		if (comparar||logica) {
//
//			System.out.println("hola si soy verdadero");
//
//			System.out.println("comparar " + comparar);
//		}else {
//
//			System.out.println(comparar);
//
//			System.out.println(logica);
//		}
//		break;
//	  case 7:
//			System.out.println("introduzca el numero1");
//	        valor = scanner.nextInt();
//	  	  System.out.println("introduzca el numero2");
//	  	  valor0 = scanner.nextInt();   
//			boolean comparar1 = valor >= valor0;
//			boolean logica1=false;
//			if (comparar1 && logica1) {
//
//				System.out.println("hola si soy verdadero");
//
//				System.out.println("comparar " + comparar1);
//			}else {
//
//				System.out.println(comparar1);
//
//				System.out.println(logica1);
//			}
//			break;
//	  }	  while(numero!=8);
//	  
//	  }
//	  
//	}
//	  

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int numero = 0;
		do {
		System.out.println("\t\t ----- Menu-----");
		System.out.println(" \t\t1: Suma");
		System.out.println(" \t\t2: Resta");
		System.out.println(" \t\t3: Multiplicacion");
		System.out.println(" \t\t4: Division");
		System.out.println(" \t\t5: Modulo");
		System.out.println(" \t\t6: Booleans ||");
		System.out.println(" \t\t7: Booleans &&");
		System.out.println(" \t8: Salir");

		
		System.out.print("Introduzca la opción: ");
		 numero = scanner.nextInt();	
		
		switch(numero){
		case 1:
			 System.out.println("uno");
			 System.out.println("\t----Suma---");
				System.out.print("introduzca un numero ");
				int datosS = scanner.nextInt();
				System.out.print("introduzca un numero ");
				int datosSu = scanner.nextInt();		
				int suma = datosS + datosSu;
				System.out.println("Suma: " + suma);
			 break;
		case 2:
			System.out.println("\t----Resta---");
			System.out.print("introduzca un numero ");
			int datosR = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosRe = scanner.nextInt();		
			int rest = datosR - datosRe;
			System.out.println("Rest: " + rest);
			System.out.println("dos");
			break;
		case 3: 
			System.out.println("\t----Multiplicacion---");
			System.out.print("introduzca un numero ");
			int datosM = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosMu = scanner.nextInt();		
			int mult = datosM * datosMu;
			System.out.println("Mult: " + mult);
			System.out.println("tres");
			break;
		case 4:
			System.out.println("\t----Division---");
			
			System.out.print("introduzca un numero ");
			int datosD = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosDi = scanner.nextInt();
			
			if (datosDi != 0) {
				int div = datosD / datosDi;
				System.out.println("Div: " + div);			
			} else {
				System.out.println(" el denominador es cero");
			}
			
			break;
		case 5:
			
			System.out.println("\t----Modulo---");
			System.out.print("introduzca un numero ");
			int datosMo = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosMod = scanner.nextInt();		
			int modulo = datosMo % datosMod;
			System.out.println("Modulo: " + modulo);
			if (modulo == 0) {
				System.out.println("El numero es un par");
			} else {
				System.out.println("El numero no es par ");
			}
			
			break;
		case 6:
			int a = 3;
			int b =5;
			boolean comparar= a >= b;
			boolean logica = false;
			if (!comparar || !(logica)) {
				System.out.println("hola si soy verdadero ");
				System.out.println(" comparar: " + comparar);			
			} else {
				System.out.println(comparar);
				System.out.println(logica);
			}
			break;
		case 7:
			int c = 5;
			int d =5;
			boolean comparar1 = c >= d;
			boolean logica1 = false;
			if (!comparar1 && !(logica1)) {
				System.out.println("hola si soy verdadero ");
				System.out.println(" comparar: " + comparar1);			
			} else {
				System.out.println(comparar1);
				System.out.println(logica1);
			}
			break;
		case 8:
			System.out.println("Bye");
			break;
			default:
				break;
			
		}
		
			System.out.println("loop do while");
			System.out.println(numero);
		
		}while(numero != 8);
		
	}

}


