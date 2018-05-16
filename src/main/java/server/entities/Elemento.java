package server.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "tb_elemento")
public class Elemento implements Serializable{

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_elemento")
	private Long id;
	
	@NotEmpty()
	@Column()
	private String nome;
	
	@NotEmpty()
	@Column()
	private String descricao;
	
	@NotEmpty()
	@Column()
	private String cadastradoPor;
	
	public Elemento(String name, String descricao, String cadastradoPor) {
		super();
		this.nome = name;
		this.descricao = descricao;
		this.cadastradoPor = cadastradoPor;
	}

	public Elemento() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return nome;
	}

	public void setName(String name) {
		this.nome = name;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCadastradoPor() {
		return cadastradoPor;
	}

	public void setCadastradoPor(String cadastradoPor) {
		this.cadastradoPor = cadastradoPor;
	}
	
}
