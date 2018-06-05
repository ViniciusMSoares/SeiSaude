package server.entities;

import javax.persistence.Entity;

@Entity
public class Sintoma extends Situacao {

	private static final long serialVersionUID = 1L;

	public Sintoma(String name, String descricao) {
		super(name, descricao);
	}
	
	public Sintoma(Situacao situacao) {
		super(situacao.getName(), situacao.getDescricao());
	}
	
	public Sintoma() {
	}

}
