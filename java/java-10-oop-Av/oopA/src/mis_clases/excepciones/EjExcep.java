package mis_clases.excepciones;

public class EjExcep {

	public static int dividir(int a, int b) {
		int r = 0;
		try {		
			r = a/b;
		}catch (ArithmeticException e) {
			System.out.println("No se puede dividir por cero.");
		}
		return 0;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(dividir(7, 0));

	}

}
