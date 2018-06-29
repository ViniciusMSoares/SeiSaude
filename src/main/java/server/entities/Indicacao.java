package server.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Indicacao implements Serializable{

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_indicacao")
	private Long id;

	@Column()
	private float dosagem;
	
	@NotEmpty()
	@Column()
	private String efeito;
	
	@NotEmpty()
	@Column()
	private String unidade;
	
	@NotEmpty()
	@Column()
	private String tipo;
	
	private Long id_elemento;
	
	private Long id_situacao;
	
	private Long id_tipoPessoa;

	public Indicacao(float dosagem, String efeito, String unidade, String tipo,
			Long id_elemento, Long id_situacao, Long id_tipoPessoa) {
		super();
		this.dosagem = dosagem;
		this.efeito = efeito;
		this.unidade = unidade;
		this.tipo = tipo;
		this.id_elemento = id_elemento;
		this.id_situacao = id_situacao;
		this.id_tipoPessoa = id_tipoPessoa;
	}

	public Indicacao() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getDosagem() {
		return dosagem;
	}

	public void setDosagem(float dosagem) {
		this.dosagem = dosagem;
	}

	public String getEfeito() {
		return efeito;
	}

	public void setEfeito(String efeito) {
		this.efeito = efeito;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Long getId_elemento() {
		return id_elemento;
	}

	public void setId_elemento(Long id_elemento) {
		this.id_elemento = id_elemento;
	}

	public Long getId_situacao() {
		return id_situacao;
	}

	public void setId_situacao(Long id_situacao) {
		this.id_situacao = id_situacao;
	}

	public Long getId_tipoPessoa() {
		return id_tipoPessoa;
	}

	public void setId_tipoPessoa(Long id_tipoPessoa) {
		this.id_tipoPessoa = id_tipoPessoa;
	}
	
}
