package oop;

import java.util.Scanner;

public class Menu {

		Scanner s = new Scanner(System.in);
		//int numero = s.nextInt();
		int menuOp(){ 
		
			int numero=0;
			
		System.out.println("\t\t ----- Menu Principal-----");
		System.out.println(" \t\t1: Tabla de multiplicar ");
		System.out.println(" \t\t2: Operaciones aritmeticas ");
		System.out.println(" \t\t3: Mult");
		System.out.println(" \t\t4: Div");
		System.out.println(" \t\t5: Mod");
		System.out.println(" \t\t6: Bool");
		System.out.println(" \t7: Salir");
		
		System.out.print("Introduzca la opcion deseada: ");
		return numero = s.nextInt();
		}
		
		int subMenuOp() {
			int numero=0;
			
			System.out.println("\t\t ----- Menu Operaciones Aritmeticas-----");
			System.out.println(" \t\t1: Suma");
			System.out.println(" \t\t2: Resta");
			System.out.println(" \t\t3: Multiplicacion");
			System.out.println(" \t\t4: Division");
			System.out.println(" \t\t5: Modulo");
			System.out.println(" \t\t6: Booleans");
			System.out.println(" \t7: Salir");
			
			System.out.print("Introduzca la opcion deseada: ");
			return numero = s.nextInt();
		}
		
	}


	
	

