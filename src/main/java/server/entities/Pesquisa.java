package server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Pesquisa {
	
	@Transient
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_pesquisa")
	private Long id;
	
	@NotEmpty()
	@Column()
	private String fonte;
	
	@NotEmpty
	private String origem;
	
	public Pesquisa(@NotEmpty String fonte, @NotEmpty String origem) {
		super();
		this.fonte = fonte;
		this.origem = origem;
	}

	public Pesquisa() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFonte() {
		return fonte;
	}

	public void setFonte(String fonte) {
		this.fonte = fonte;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}
	
}
