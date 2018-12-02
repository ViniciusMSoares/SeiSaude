package server.entities;

import javax.persistence.Entity;

@Entity
public class Sintoma extends Situacao {

	private static final long serialVersionUID = 1L;

	public Sintoma(String name, String descricao, String complemento, String cadastradoPor) {
		super(name, descricao, complemento, cadastradoPor);
	}
	
	public Sintoma(Situacao situacao) {
		super(situacao.getName(), situacao.getDescricao(), situacao.getComplemento(), situacao.getCadastradoPor());
	}
	
	public Sintoma() {
	}

}
