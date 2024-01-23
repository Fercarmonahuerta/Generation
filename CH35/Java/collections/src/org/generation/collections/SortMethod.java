package org.generation.collections;
//import java.util.ArrayList;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		// El método .sort() permite ordenar los elementos de un arraylist
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(9);
		points.add(8);
		
		System.out.println(points); //No se encuentrarn ordenados de menos a mayor
		//ordenando:
		Collections.sort(points);
		System.out.println(points);
		
		
		names.add("Daniel");
		names.add("Rocio");
		names.add("Arturo");
		names.add("Eveida");
		names.add("fernanda");
		
		Collections.sort(names);
		System.out.println(names); //Toma en cuenta el ordenamiento con base a la tabla ASCII
		
		
		
		
	}

}
