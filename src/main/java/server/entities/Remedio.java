package server.entities;

import javax.persistence.Entity;

@Entity
public class Remedio extends Produto {

	private static final long serialVersionUID = 1L;

	public Remedio(String name, String descricao, String cadastradoPor, String fabricante, String complemento) {
		super(name, descricao, cadastradoPor, fabricante, complemento);
	}

	public Remedio(Elemento elemento, String fabricante) {
		super(elemento, fabricante);
	}
	
	public Remedio() {
	}

}
