package mangosNaranjas;

import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner s = new Scanner(System.in);
		
		System.out.println("Ingrese el nÃºmero de mangos: ");
		int mangos = s.nextInt(); //para no. de mangos
		
		System.out.println("Ingrese el nÃºmero de naranjas: ");
		int naranjas = s.nextInt(); //para no. de naranjas
		
		
		
		//Instancia
		MangosNaranjas mangosNaranjas = new MangosNaranjas(mangos, naranjas);
		mangosNaranjas.imprimir();
		
	}

}
