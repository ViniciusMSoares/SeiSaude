package server.entities;

import javax.persistence.Entity;

@Entity
public class Alimento extends Produto {

	private static final long serialVersionUID = 1L;

	public Alimento(String name, String descricao, String cadastradoPor, String complemento) {
		super(name, descricao, cadastradoPor, cadastradoPor, complemento);
	}

	public Alimento(Elemento elemento, String fabricante) {
		super(elemento, fabricante);
	}
	
	public Alimento() {
	}

}
