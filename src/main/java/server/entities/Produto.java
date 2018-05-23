package server.entities;

import javax.persistence.Entity;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Produto extends Elemento {
	
	@Transient
	private static final long serialVersionUID = 1L;
	
	@NotEmpty
	private String fabricante;
	
	public Produto(String name, String descricao, String cadastradoPor, String fabricante) {
		super(name, descricao, cadastradoPor);
		this.fabricante = fabricante;
	}
	
	public Produto(Elemento elemento, String fabricante) {
		super(elemento.getName(), elemento.getDescricao(), elemento.getCadastradoPor());
		this.fabricante = fabricante;
	}

	public Produto() {
	}

	public String getFabricante() {
		return fabricante;
	}

	public void setFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	
}
