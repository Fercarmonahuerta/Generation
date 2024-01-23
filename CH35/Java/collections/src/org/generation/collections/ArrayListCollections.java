package org.generation.collections;

//import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		// ARRAYS
		String[] names = {"Jonathan", "Fernanda", "Lizbeth", "Arturo", "Martin", "Lucero"};
		
		//Imprimiendo arrays
		System.out.println(Arrays.toString(names));
		
		int[] edades = {12, 35, 29, 48, 79, 3};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		int edad1 = edades[2];
		System.out.println("La edad de " + name1 + " es de " + edad1 + " años");
		
		//Obtener la longitud del Array
		int longitudNames = names.length;
		System.out.println("El array names tiene " + longitudNames + " elementos");
		
		//Obtener el último elemento
		String ultimoElemento = names[names.length-1];
		System.out.println("El ultimo elemento del array names es " + ultimoElemento);
	 //Si la longitud  NO  vive en la variable:
		//String ultimoElemento = names[longitudNames -1]
		
		
		//Mostrar cada elemento utilizando forEach
		for (String name : names) {
			System.out.println(name);
		}
		
		///***************Array List **********//
		//ArrayList  es un array que puede cambiar de tamaño. Es la clase de java que representa la estructura de datos de arrays. Permite elementos duplicados y recibe varios métodos para su manipulación 
		ArrayList<String> films = new ArrayList<String>(); //aqui importé arraylist a java util manteneindo el mouse
		//tambien se define así:
		//Arraylist<integer>matricula = new ArrayList<integer>();
		ArrayList<Integer>matricula = new ArrayList<>();
		//Agregar elementos:
		films.add("Inception");
		films.add("Se7en");
		films.add("The Shining");
		films.add("Pulp fiction");
		films.add("Mr Nobody");
		films.add("Ready Player One");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer película es " + film1);
		
		
		//Modificar u elemento: name.set(index, newValue)
		String film3 = films.set(3, "Memento"); // sime quedo aqui me imprime al array list anterior
		String film3Get = films.get(3); //lo guardo en otra variable para traer el nuevo array
		System.out.println(film3Get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del arrayList fims es de " + sizeFilms + " elementos");
		
		//Agregar un elemento y despues eliminarlo name.remove(index)
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(6);
		System.out.println(films);
		
		System.out.println("***** Films en lista ****");
		for (String film : films) {
			System.out.println(film);
		}
		
		matricula.add(25253);
		//characters.add('A');
		
		System.out.println(matricula);
		//System.out.println(characters);
		
		
		
		
		
	}

}
