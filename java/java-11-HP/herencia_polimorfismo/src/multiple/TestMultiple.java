package multiple;

public class TestMultiple {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Suma suma = new Suma(5,5);
		OperacionesAritmeticas oa = new Suma (10, 5);
		Operaciones o = new Suma(3, 5);
		
		Resta resta = new Resta(17,5);
		OperacionesAritmeticas oar = new Resta (12, 5);
		Operaciones oare = new Resta(3, 5.25);
		
		o.mensajes();
		
		System.out.println("Objeto oa: " +oa.sumar());
		System.out.println("La suma es: " + suma.sumar());
		
		
		resta.mensajes();
		
		System.out.println("Objeto oar: " + oar.restar());
		System.out.println("La resta es: " + resta.restar());
		oare.mensajes();
	}

}
