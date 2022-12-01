package threads;

public class MiEjecutable implements Runnable {
	static long horaInicio = System.currentTimeMillis();// Nos permite manipular los tiempos
	int cont = 0;
	int num;

	public MiEjecutable(int numObjeto) {
		this.num = numObjeto;
	}

	public void run() {
		while (System.currentTimeMillis() - horaInicio < 3000) {
			System.out.print(num); // visualiza su número durante 3s.
			cont++; // cuenta el numero de visualizaciones
		}
	}

	public void visualizar() {
		System.out.println("Objeto num." + num + " - " + cont + " veces.");
	}

}
