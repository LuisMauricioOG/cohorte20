package oop;

import java.util.Scanner;

public class OperacionesAritmeticas {
//Crear metodos para las operaciones aritmeticas
	Scanner sc = new Scanner(System.in);
	
	double add() {
		
System.out.println("Introduce el primer numero: ");
		double valor1 = sc.nextDouble();
		
		System.out.println("introduzca el segundo numero: ");
		double valor2 = sc.nextDouble();
		
		double suma = valor1+valor2;
		return suma;
	}
	
	double substract() {
		
		System.out.println("Introduce el primer numero: ");
				double valor1 = sc.nextDouble();
				
				System.out.println("introduzca el segundo numero: ");
				double valor2 = sc.nextDouble();
				
				double subs = valor1-valor2;
				return subs;
			}

	double mult() {
		
		System.out.println("Introduce el primer numero: ");
				double valor1 = sc.nextDouble();
				
				System.out.println("introduzca el segundo numero: ");
				double valor2 = sc.nextDouble();
				
				double prod = valor1*valor2;
				return prod;
			}
  	     
	double division() {
		
		System.out.println("Introduce el primer numero: ");
				double valor1 = sc.nextDouble();
				
				System.out.println("introduzca el segundo numero: ");
				double valor2 = sc.nextDouble();
								
				double div = valor1/valor2;
				if (valor2 != 0) {
					return div;
				}else {
					System.out.println("No se puede dividir entre 0.");
				}return 0;
			} 
	
	double modulo() {
		
		System.out.println("Introduce el primer numero: ");
				double valor1 = sc.nextDouble();
				
				System.out.println("introduzca el segundo numero: ");
				double valor2 = sc.nextDouble();
				
				double mod = valor1%valor2;
				return mod;
			}
	
}
