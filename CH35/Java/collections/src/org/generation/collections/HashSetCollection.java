package org.generation.collections;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// hashSet es una clase de collections donde cada elemento es único, es decir, no se repiten los elementos
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Ornitorrinco");
		animals.add("Mapache");
		animals.add("Capibara");
		animals.add("Capibara");
		
		System.out.println(animals);
		
		//Método contains()
		//Conocer si un elemento se encuentra dentro del set: contains
		System.out.println(animals.contains("Perro"));
		
		//Eliminar un elemento: remove();
		animals.remove("Gato"); //Elimino
		System.out.println(animals);
		
		/**
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		//Limpiar el hashSet
		animals.clear();
		System.out.println(animals);
		
		
		
		
	}

}
