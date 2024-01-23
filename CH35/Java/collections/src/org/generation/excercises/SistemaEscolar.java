package org.generation.excercises;
/*
 Programa que permite que un usuario agregue nombre y apellidos de un estudiante. posteriormente, muestra la lista de los estudiantes agregados.
 -Requerimeintos:
 	> Usar ArrayList
 	> Scanner para interactuar con el usuario
 	> Loop para permitir que se agreguen varios estudiantes
 	> Opción para salir del loop con la palabra 'salir', if-else, try-catch, !=, switch) son posibles
 	> Mostrar lista de estudianes (for-each)
 	
  */

import java.util.ArrayList;
import java.util.Scanner;

public class SistemaEscolar {

	public static void main(String[] args) {
		
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		Scanner scanner = new Scanner(System.in); //Scaner para el usuario
		
		//Loop para permitir agregar un usuarios
		String nombreEstudiante; //inicializado de manera global
		do {
			System.out.println("Ingresa elo nombre del estudiante. Escribe 'Salir' para finalizar");
			nombreEstudiante = scanner.nextLine(); //Invocando de manera local
			estudiantes.add(nombreEstudiante);
			
		} while(!nombreEstudiante.equals("Salir")); //Siempre que No se escriba "Salir", el loop se sigue ejecutando
		
		System.out.println("** Lista de estudiantes **");
		
		for (String estudiante : estudiantes) {
			//Si no quiero que se muestre la palabra 'Salir' voy a agregar una condicional
			if (!estudiante.equals("Salir"))
			System.out.println(estudiante);
			
		}
		
		scanner.close();	
		
		/*
		 *  Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).
		 * 
		 * 
		 * */
		
		

	}

}
