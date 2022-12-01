package variables;

public class TipoDeVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//byte, short, int, long
		byte numeroB = 127; //almacena hasta 127. Luego, genera error.
		System.out.println("El tamaño de un byte es " + Byte.SIZE + " bits.");
		System.out.println("El valor máximo es " + Byte.MAX_VALUE);
		System.out.println("El valor mínimo es " + Byte.MIN_VALUE);
		System.out.println("---------------------------------------------------------");
		int entero = 5;
		System.out.println("Tamaño de un entero " + Integer.BYTES);
		System.out.println("Tamaño " + Integer.SIZE);
		System.out.println("El valor máximo es " + Integer.MAX_VALUE);
		System.out.println("Su valor mínimo es " + Integer.MIN_VALUE);
		System.out.println("---------------------------------------------------------");
		short corto = 4561;
		System.out.println("Tamaño en bytes " + Short.BYTES);
		System.out.println("Tamaño " + Short.SIZE);
		System.out.println("El valor máximo es " + Short.MAX_VALUE);
		System.out.println("Su valor mínimo es " + Short.MIN_VALUE);
		System.out.println("---------------------------------------------------------");
		long num = 24521231;
		System.out.println("Tamaño en bytes " + Long.BYTES);
		System.out.println("Tamaño " + Long.SIZE);
		System.out.println("El valor máximo es " + Long.MAX_VALUE);
		System.out.println("Su valor mínimo es " + Long.MIN_VALUE);
		System.out.println("------------------FLOAT---------------------------------------");
		//Primitivos flotantes:
		System.out.println("Tamaño en bytes " + Float.BYTES);
		System.out.println("Tamaño " + Float.SIZE);
		System.out.println("El valor máximo es " + Float.MAX_VALUE);
		System.out.println("Su valor mínimo es " + Float.MIN_VALUE);
		float comaF = 100.10f;
		//var también funciona, pero eso es a partir de la V10.
		System.out.println("\n" + "---> float " + comaF);
		
		System.out.println("----------------DOUBLE-----------------------------------------");
		System.out.println("Tamaño en bytes " + Double.BYTES);
		System.out.println("Tamaño " + Double.SIZE);
		System.out.println("El valor máximo es " + Double.MAX_VALUE);
		System.out.println("Su valor mínimo es " + Double.MIN_VALUE);
		
		double comaD = 1000.10E23;
		System.out.println("\n" + "---> double " + comaD);
		
		
	System.out.println("----------------BOOLEAN-----------------------------------------");
	boolean estado = false;
		
		if (estado) {
			System.out.println("soy verdadero");
		}else {
			System.out.println("soy falso");
		}
	var edad = 10;
	var adulto = edad >= 10;
	System.out.println("---> : varBool " + adulto);
	
		if (adulto) {
			System.out.println("Edad SI es mayor a 10: " + adulto);
		}else {
			System.out.println("Edad SI es mayor a 10: " + adulto);
		}
		
		System.out.println("----------------char-----------------------------------------");
		
		char caracter = "halo".charAt(2); //para imprimir específicamente un caracter. Para este caso, imprime la "l".
			
	}

}
