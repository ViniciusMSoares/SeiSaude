package server.entities.DTOs;

public class ComponenteDTO {

	private String[] name;
	
	private String[] valores;
	
	private String[] unidades;
	
	public ComponenteDTO() {
		
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
	
}
