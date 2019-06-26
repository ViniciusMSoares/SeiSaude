package server.entities;

import javax.persistence.Entity;

@Entity
public class Doenca extends Situacao {

	private static final long serialVersionUID = 1L;

	public Doenca(String name, String descricao, String complemento, String cadastradoPor) {
		super(name, descricao, complemento, cadastradoPor);
	}
	
	public Doenca(Situacao situacao) {
		super(situacao.getNome(), situacao.getDescricao(), situacao.getComplemento(), situacao.getCadastradoPor());
	}
	
	public Doenca() {
	}

}
