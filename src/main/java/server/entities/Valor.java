package server.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Valor implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	private Long id_valor_nutricional;
	
	@Id
	private Long id_alimento;
	
	private float valorDiario;
	
	private String quantidade;

	public Valor(Long id_valor_nutricional, Long id_alimento, float valorDiario, String quantidade) {
		super();
		this.id_valor_nutricional = id_valor_nutricional;
		this.id_alimento = id_alimento;
		this.valorDiario = valorDiario;
		this.quantidade = quantidade;
	}

	public Long getId_valor_nutricional() {
		return id_valor_nutricional;
	}

	public void setId_valor_nutricional(Long id_valor_nutricional) {
		this.id_valor_nutricional = id_valor_nutricional;
	}

	public Long getId_alimento() {
		return id_alimento;
	}

	public void setId_alimento(Long id_alimento) {
		this.id_alimento = id_alimento;
	}

	public float getValorDiario() {
		return valorDiario;
	}

	public void setValorDiario(float valorDiario) {
		this.valorDiario = valorDiario;
	}

	public String getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}
	
	
}
