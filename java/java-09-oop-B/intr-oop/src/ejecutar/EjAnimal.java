package ejecutar;

import clases.Animal;

public class EjAnimal {
	public static void main(String[] mau) {
	Animal miAnimal = new Animal("Chopper");
	miAnimal.setEdad(3);
	System.out.println("El nombre es: " + miAnimal.getNombre());
	System.out.println("Su edad: " + miAnimal.getEdad() + " años");
	
	Animal otroAnimal;
	otroAnimal = new Animal();
	otroAnimal.setNombre("Horacio");
	otroAnimal.setEdad(6);
	
	System.out.println(otroAnimal.getNombre());
	}			

}
