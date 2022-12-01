package colecciones;

//import java.util.ArrayList;
//import java.util.List;
//import java.util.Collection;
//Para evitar tantas lineas de importacion: 
import java.util.*;


public class Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//List - ArrayList
		//Solo podemos guardar valores de un mismo tipo
		
		System.out.println("------- Array List --------");
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("GDL");
		miArray.add("CDMX");
		miArray.add("MTY");
		miArray.add(1, "Manzanillo");
		
		//Para remover un elemento
		miArray.remove(0);
		//Si queremos guardar esa variable: 
		//String valorQuitado = miArray.remove(0);

		System.out.println(miArray);
		//Dentro de las colecciones, no existe lenght, es size()...
		imprimir(miArray);
		
		System.out.println("------- HashSet --------");
		
		Set<String> miSet = new HashSet<String>();
		
		miSet.add("Panchito");
		miSet.add("Paco");
		miSet.add("Maca");
		miSet.add("Juan");
		miSet.add("Juan");
		
		System.out.println(miSet); //No repite valores guardados que esten repetidos NI los ordena (o lo hace de una manera rara-aleatoria)
		System.out.println(miSet.contains("Maca"));
		
		System.out.println("------- HashSet --------");
		//Pares de valores (llave - valor)
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		miMap.put("Valor 1", 69);
		miMap.put("Valor 2", 70);
		miMap.put("Valor 1", 56);
//Se reemplazara el valor que ya exisitia de Valor 1
		System.out.println(miMap);
		System.out.println(miMap.get("Valor 2"));
		System.out.println(miMap.keySet());//nos regresa un arreglo con los nombres de las llaves que colocamos en miMap
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}

		
	}
	//Metodo para imprimir algun valor
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
	}


}
