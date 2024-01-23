package org.generation.letras; //aqui se instancian todos los objetos

public class LetrasMain {
	public static void main(String[] args) {
		//Instanciar objetos (Letras y Contador)
		//Para crear un objeto desde la clase letra:
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto y te mostraré el número de vocales, consonantes, símbolos y números");
		String palabra = letras.leerEntrada(); //esto viene de letras.java, guardamos el texto introducido en una variable
		
		//Invocar los métodos que me permiten contar los caracteres
		Contador contador = new Contador();
		
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " números");
		
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolos + " símbolos");
		
		
	}
}
