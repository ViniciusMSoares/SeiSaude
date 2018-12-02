package server.entities;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class Produto extends Elemento {
	
	@Transient
	private static final long serialVersionUID = 1L;
	
	private String fabricante;
	
	public Produto(String name, String descricao, String cadastradoPor, String fabricante, String complemento) {
		super(name, descricao, cadastradoPor, complemento);
		this.fabricante = fabricante;
	}
	
	public Produto(Elemento elemento, String fabricante) {
		super(elemento.getName(), elemento.getDescricao(), elemento.getCadastradoPor(), elemento.getComplemento());
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
