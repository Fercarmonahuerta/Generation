package org.generation.letras;
import java.util.Scanner;

/*
 Crear un programa que le solicite un mensaje al usuario y cuente cuantas vocales, consontnes, números y caracteres posee dicho mensaje
 	Lector: métodos para interactuar con el usuario
 	LetrasMain: vamos a instanciar los objetos
 	Contador: Métodos para contar vocales, consonantes, número y caracteres
 
 */
public class Letras {
	//Para que nuestro usuario interactúe, definimos un Scanner
	Scanner scanner = new Scanner(System.in);
	
	//Metemos el Scanner dentro de un método
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Método para proporcionar contexto al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
	
	
	
}



