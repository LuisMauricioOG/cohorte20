package multiple;

public interface OperacionesAritmeticas {
	//Lo unico que puede haber en una interfaz son constantes
	double RESULTADO = 5;
	//Los static hacen que el valor se guarde en un espacio de memoria, lo cual lo hace publico
	public double restar();
	public double sumar();
}
