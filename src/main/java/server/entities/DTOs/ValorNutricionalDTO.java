package server.entities.DTOs;

public class ValorNutricionalDTO {

	private String[] name;
	
	private String[] valores;
	
	private String[] quantidades;
	
	private String[] unidades;
	
	public ValorNutricionalDTO() {
		
	}

	public String[] getName() {
		return name;
	}

	public void setName(String[] name) {
		this.name = name;
	}

	public String[] getValores() {
		return valores;
	}

	public void setValores(String[] valores) {
		this.valores = valores;
	}

	public String[] getUnidades() {
		return unidades;
	}

	public void setUnidades(String[] unidades) {
		this.unidades = unidades;
	}

	public String[] getQuantidades() {
		return quantidades;
	}

	public void setQuantidades(String[] quantidades) {
		this.quantidades = quantidades;
	}
	
}
