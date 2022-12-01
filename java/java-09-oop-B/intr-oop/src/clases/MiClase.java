package clases;

public class MiClase {
	
	private int atributo1;
	private String atributo2;
	//private para que no se pueda tener acceso desde otro lado, solo la Clase. Es decir, que sean exclusivos. Que no se puedan modificar ni alterar.
	//Miembros de datos de una clase son los metodos y los atributos.

{//modificador de acceso por default
		
	}
	
	public MiClase(int atributo1, String atributo2) {
		
		this.atributo1 = atributo1;
		this.atributo2 = atributo2;
	}
	public MiClase() {
		
	}
	//Tener un metodo sobrecargado es cuando hay dos objetos con el mismo nombre, pero con diferente cantidad de atributos/parametros
	
	public void metodo() {
		MiClase obj = new MiClase();
		int n = obj.atributo1 = 2357;
		String w = obj.atributo2 = "Hola";
		System.out.println("--> " + n);
		System.out.println("--> " + w);
	
		System.out.println(atributo1);
		System.out.println(atributo2);
	}
	public double metodo1() {
		double a = 0.0;
		return a;
	}
	
}

	


	
	

