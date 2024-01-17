package bucles;

public class DoWhile {

	public static void main(String[] args) {
		/*
		 Evalúa la expresión en la parte inferior del ciclo.
		 por lo tanto las ceclaraciones dentro del bloque do siempre se ejecutanl amenos una vez
		 * */
		
		//Cuenta del 1 al 20
		int cuenta = 5;
		do {
			System.out.println("cuenta " + cuenta);
			cuenta++;
		} while(cuenta < 0); //output 1 ya se ejecutó al menos 1 vez

	}

}
