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
	
	@NotEmpty(message = "Nome não pode ser vazio.")
	private String name;
	
	@NotEmpty(message = "Descrição não pode ser vazia.")
	private String descricao;
	
	@NotEmpty()
	private String cadastradoPor;
	
	public Elemento(String name, String descricao, String cadastradoPor) {
		super();
		this.name = name;
		this.descricao = descricao;
		this.cadastradoPor = cadastradoPor;
	}

	public Elemento() {
		
	}
}
