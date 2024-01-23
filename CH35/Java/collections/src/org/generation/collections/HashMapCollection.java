package org.generation.collections;
import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {

	public static void main(String[] args) {
		/*
		 HashMap almacena elementos en pares "clave/valor" y se puede acceder mediante index.
		 No es ordenado y permite datos duplicados 
		 */
		HashMap <String, String> capitals = new HashMap<String, String>();
		
		//Agregando elementos "clave/valor" (.put)
		capitals.put("", "");
		
		capitals.put("Villahermosa", "Tabasco");
		capitals.put("Monterrey", "Nuevo León");
		capitals.put("Guadalajara", "Jalisco");
		capitals.put("Mérida", "Yucatán");
		capitals.put("Puebla", "Puebla");
		
		System.out.println(capitals);
		
		//Map.Entry <> es un metodo de la interfaz Map que representa  una entrada en un map. toma como argumento los tipo s de datos asignados al hasshMap. el ususario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto (Set) de las entrada (clave-valor) en el hashMap.
		//De esta manera ya podemos utilizar los métodos de abjajo
		for (Map.Entry<String, String> entry : capitals.entrySet()) {
			System.out.println(entry.getKey() + "es la cpaital de" + entry.getValue());
		}
		
		
		//********* Ejemplo 02 ******************//
		Map<String, Integer> calificaciones = new HashMap<String, Integer>();
		
		calificaciones.put("Rene", 9);
		calificaciones.put("Ximena", 10);
		calificaciones.put("Diego", 8);
		calificaciones.put("Eunice", 6);
		
		for(Map.Entry<String, Integer> calificacion : calificaciones.entrySet()) // entry me permite entrar al map
			System.out.println("la calificacion de " + calificacion.getKey() + " es de " + calificacion.getValue());
		}
		
		
		
		
		//Mostrar la clave (.getKey(),y el valor (getValue()) de manera individual para su manipulación
		
		//System.out.println(capitals.get);
		
		
		

	}

}
