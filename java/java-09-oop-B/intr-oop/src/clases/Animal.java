package clases;

public class Animal {
	private String nombre;
	private int edad;
	private String raza;
	
	//Creando al constructor
	
	public Animal() {
	}
	public Animal(String nombre) 	{
		this.nombre = nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre; 
	}
	public void setEdad(int nuevaEdad) {
		this.edad = nuevaEdad;
	}
	public String getNombre() {
		return nombre;
	}
	public int getEdad() {
		return edad;
	}
		
	
}
