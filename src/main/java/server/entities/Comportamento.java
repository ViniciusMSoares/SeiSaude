package server.entities;

import javax.persistence.Entity;

@Entity
public class Comportamento extends Elemento {

	private static final long serialVersionUID = 1L;

	public Comportamento(String name, String descricao, String cadastradoPor) {
		super(name, descricao, cadastradoPor);
	}
	
	public Comportamento(Elemento elemento) {
		super(elemento.getName(), elemento.getDescricao(), elemento.getCadastradoPor());
	}

	public Comportamento() {
	}

}
