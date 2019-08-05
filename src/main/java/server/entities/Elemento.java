package server.entities;

import java.io.Serializable;
import java.util.Collection;

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
@Table(name = "tb_elemento")
public class Elemento implements Comparable, Serializable{

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_elemento")
	private Long id;
	
	@NotEmpty()
	@Column()
	private String nome;
	
	@Column()
	private String descricao;
	
	@NotEmpty()
	@Column()
	private String cadastradoPor;
	
	@Column()
	private String complemento;
	
	public Elemento(String nome, String descricao, String cadastradoPor, String complemento) {
		super();
		this.nome = nome;
		this.descricao = descricao;
		this.cadastradoPor = cadastradoPor;
		this.complemento = complemento;
	}

	public Elemento() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public int compareTo(Elemento elemento) {
        return this.nome.compareTo(elemento.getNome());
    }
	
}
