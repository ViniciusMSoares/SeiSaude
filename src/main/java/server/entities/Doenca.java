package server.entities;

import javax.persistence.Entity;

@Entity
public class Doenca extends Situacao {

	private static final long serialVersionUID = 1L;
	
	public Doenca(String name, String descricao) {
		super(name, descricao);
	}
	
	public Doenca(Situacao situacao) {
		super(situacao.getName(), situacao.getDescricao());
	}
	
	public Doenca() {
	}

}
