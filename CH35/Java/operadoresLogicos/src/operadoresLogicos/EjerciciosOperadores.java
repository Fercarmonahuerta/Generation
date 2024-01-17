package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */

	// && and
		int anios = 5;
		boolean esInfante = true;
		boolean costoInfante = anios <= 12 && esInfante;
		System.out.print("Es peque " + costoInfante);
		
		// || or
		String cliente = "Cliente123";
		String credenciales ="fergomina94";
		
		boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("fergomina94");

		// ||
		double costoPasaje = 380.50;
		int edad = 58;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		System.out.print("Teien descuento? " + costoPasaje);
		

		//! not
		
		boolean asientosdisponibles = true;
		boolean asientosConDescuento = !libres;
		boolean libres = true;
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
		
	}
	

}
