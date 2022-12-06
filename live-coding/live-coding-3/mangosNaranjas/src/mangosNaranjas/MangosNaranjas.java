package mangosNaranjas;

import java.util.*;

public class MangosNaranjas extends Principal {
	//Entrada de usuario
		Scanner scanner = new Scanner(System.in);
		 
		int mangos;
		int naranjas;
		
		//constructor
		public MangosNaranjas (int mangos, int naranjas) {
			this.naranjas = naranjas;
			this.mangos = mangos;
		}
		
		//Creacion del metodo numCajas
		public int numCajas () {
			
			int valor1 = 0;
			int valor2 = 0;
			 valor1 = Math.max(mangos, naranjas);
			 valor2 = Math.min(mangos, naranjas);
			
			int resultado = 0;
			do {
				resultado = valor2;
				valor2 = valor1 % valor2;
				valor1 = resultado;
			} while (valor2 !=0);
			
			return resultado;
		}
		
		//Creacion del metodo mangos
		public int mangos() {
			int numMangos = 0;
			numMangos = mangos/numCajas();
			return numMangos;
		}
		
		public int naranjas() {
			int numNaranjas = 0;
			numNaranjas = naranjas/numCajas();
			return numNaranjas;
		}
		
		
		public void imprimir() {
			int cajas = numCajas();
			System.out.println("El numero de cajas es: " + cajas);
			System.out.println("El numero de mangos es: " + mangos());
			System.out.println("El numero de naranjas es: " + naranjas());
		}
	}


