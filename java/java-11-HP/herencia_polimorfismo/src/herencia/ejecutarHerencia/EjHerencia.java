package herencia.ejecutarHerencia;

import herencia.*;

public class EjHerencia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Padre p = new Padre("Juan", "Av. Soares 50");
		p.mostrarDatos();
		Hija h = new Hija("Dora", "CDMX", 15);
		h.mostrarDatos();
		
		Hija h1 = new Hija("Diego", "Tula", 20);
		h1.mostrarDatos("Cruz");
	}

}
