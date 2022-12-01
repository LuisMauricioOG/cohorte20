package oop;

public class EjemploClase {
	
	static void cambio() {
		
		Tablas t = new Tablas();
		Menu m = new Menu();
		SubMarino sm = new SubMarino();
		
		int opcionM = m.menuOp();//o solo poner dentro de los parentesis de switch m.menuOp()
		
		do {
	
		
		switch (opcionM) {
		case 1: {
			t.tabla();
			break;
		}
		case 2:{
			sm.submenu();
			break;
		}
		default:
		}
	}while (opcionM != 7);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EjemploClase.cambio();
		
	}

}
