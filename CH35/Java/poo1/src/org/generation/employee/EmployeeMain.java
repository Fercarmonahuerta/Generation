package org.generation.employee;

public class EmployeeMain {

	public static void main(String[] args) {
		// Instancia los objetos
		Employee Daniel = new Employee("Dnaiel", "Maldonado", 7836, 8596.33, "Instructor");
		Employee Abigail = new Employee("Abigail", "Martínez", 5274, 19754.20d, "Desarrolladora fronted");
		Employee Arturo = new Employee("Arturo", "Ávila", 4403, 17999.62, "Desarrollador FullStack");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//Invocando métodos definidos previamente (trabajr, calcularSalario, capacitarse e InfoGeneral
		
		Daniel.inforGeneral(); //no pongo print porque ya estaba systeoutPint en employee.java
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		//Utilizar información específica de cada objeto mediante sus propiedades
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa un puesto de " + Daniel.getPuesto());
		//Accediento a
		System.out.println(Abigail.puesto + "gana $" + Abigail.salario + " pesos");
		
	//Actualizando informacion mediante Setter
		Arturo.setSalario(24598.11);
		Arturo.calcularSalario();
		
	}

}
