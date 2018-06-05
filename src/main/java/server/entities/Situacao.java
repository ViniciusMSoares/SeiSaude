package server.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Transient;

import javax.validation.constraints.NotEmpty;

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@Table(name = "tb_situacao")
public class Situacao implements Serializable{

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_situacao")
	private Long id;
	
	@NotEmpty()
	@Column()
	private String nome;
	
	@NotEmpty()
	@Column()
	private String descricao;
	
	public Situacao(String name, String descricao) {
		super();
		this.nome = name;
		this.descricao = descricao;
	}

	public Situacao() {
		
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
	
}