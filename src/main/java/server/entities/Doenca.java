package server.entities;

import javax.persistence.Entity;

@Entity
public class Doenca extends Situacao {

	private static final long serialVersionUID = 1L;
	
	private String complemento;

	public Doenca(String name, String descricao, String complemento) {
		super(name, descricao);
		this.complemento = complemento;
	}
	
	public Doenca(Situacao situacao, String complemento) {
		super(situacao.getName(), situacao.getDescricao());
		this.complemento = complemento;
	}
	
	public Doenca() {
	}
	
	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

}
