package herencia;

public class Hija extends Padre{
	private int edad;
	//private String apellido;

	public Hija(String nombre, String domicilio, int edad) {
		super(nombre, domicilio);
		this.edad = edad;
	}
	
	public void mostrarDatos() {
		System.out.println("El nombre es: " + nombre + " , con domicilio en " + domicilio + ". Tienes " + edad + " años.");
	}
	//Sobrecargando
	public void mostrarDatos(String apellido) {
		//this.apellido=apellido;
		System.out.println("El nombre es: " + nombre + " " + apellido + " , con domicilio en " + domicilio + ". Tienes " + edad + " años.");}

}
