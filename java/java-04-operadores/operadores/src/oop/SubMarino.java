package oop;

public class SubMarino {
	//main temporal
	void submenu() {
		Menu m = new Menu();
		OperacionesAritmeticas oa = new OperacionesAritmeticas();
		
		int opcion = 1;
		
	do {	
	switch (m.subMenuOp()) {
		case 1: {
			System.out.println(oa.add());
			break;
		}
		case 2: {
			System.out.println(oa.substract());
			break;
		}
		case 3:{
			System.out.println(oa.mult());
			break;
		}
		case 4:{
			System.out.println(oa.division());
			break;
		}
		case 5:{
			System.out.println(oa.modulo());
			break;
		}
		case 6:{
			System.out.println("Soy el caso 6");
			break;
		}
		default:
			break;
		}
	}while (opcion != 7);
				
	}
	
	
//	public static void main(String[] args) {
//		SubMarino.submenu();
//	}
}
