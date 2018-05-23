package server.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(Quantidade.class)
public class Quantidade implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	private Long id_componente;
	
	@Id
	private Long id_produto;
	
	private float valor;
	
	private String unidade;

	public Quantidade(Long id_componente, Long id_produto, float valor, String unidade) {
		this.id_componente = id_componente;
		this.id_produto = id_produto;
		this.valor = valor;
		this.unidade = unidade;
	}
	
	public Quantidade () {
		
	}

	public Long getId_componente() {
		return id_componente;
	}

	public void setId_componente(Long id_componente) {
		this.id_componente = id_componente;
	}

	public Long getId_produto() {
		return id_produto;
	}

	public void setId_produto(Long id_produto) {
		this.id_produto = id_produto;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}
	
}
