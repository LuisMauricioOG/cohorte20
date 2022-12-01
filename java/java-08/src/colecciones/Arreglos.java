package colecciones;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Arreglos - Arrays - Matrices 
		String [] miArreglo = new String[5];
		miArreglo[0] = "Mau";
		miArreglo[1] = "Raul";
		miArreglo[2] = "Vic";
		miArreglo[3] = "Saul";
		miArreglo[4] = "Mafer";
		
		System.out.println(miArreglo);
		//Nos mostrará la dirección: [Ljava.lang.String;@75a1cd57
		
		for(int i=0; i<miArreglo.length; i++) {
			System.out.println("ciclo for: " + miArreglo[i]);
		}
			
		System.out.println("--------------------------------------------------");
		//forEach --> recorre de forma automatica el arreglo
		for(String nombre : miArreglo) {
				System.out.println("For Each: " + nombre);
			}
			
		System.out.println("--------------------------------------------------");
		//Math.pow(2, 2)
		//Arrays
		System.out.println(Arrays.toString(miArreglo));
				
		//Tipos de valores
		int numeros [] = new int[5];
		numeros[0] = 3;
		numeros[1] = -56;
		numeros[2] = (int) 3.45;
		numeros[3] = Integer.parseInt("2");
		//Colocara 0 cuando no especifiquemos en valor en el indice 4
				
		for(int numero : numeros) {
			System.out.println("Valores del arreglo numeros: " + numero);	
		}
				
		//Arreglos de objetos
		Persona persona1  = new Persona("Pancho", 30);
		Persona persona2  = new Persona("Pato", 35);
		
		//
		Persona [] arrPersonas = new Persona[3];
		
		arrPersonas[0] = persona1;
		arrPersonas[1] = persona2;
		
		arrPersonas[2] = new Persona("Luis", 18);
		
		System.out.println(arrPersonas[0].nombre);
		System.out.println(arrPersonas[1].nombre);
		//System.out.println(arrPersonas);
		//Podemos acceder a sus propiedades:
				
		System.out.println(arrPersonas[2].nombre);
		
		for(Persona persona : arrPersonas) {
			System.out.println("Nombre: " + persona.nombre + ", edad: " + persona.edad);
		}
		
		//Arreglos literales
		String [] arrString = {"Manzana", "Pera", "Banana", "Hola", "12"};
		System.out.println(Arrays.toString(arrString));
		
	}

}
