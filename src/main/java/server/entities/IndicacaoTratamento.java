package server.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(IndicacaoTratamento.class)
public class IndicacaoTratamento implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	private Long id_tratamento;
	
	@Id
	private Long id_indicacao;

	public IndicacaoTratamento(Long id_tratamento, Long id_indicacao) {
		super();
		this.id_tratamento = id_tratamento;
		this.id_indicacao = id_indicacao;
	}

	public IndicacaoTratamento() {
		super();
	}

	public Long getId_tratamento() {
		return id_tratamento;
	}

	public void setId_tratamento(Long id_tratamento) {
		this.id_tratamento = id_tratamento;
	}

	public Long getId_indicacao() {
		return id_indicacao;
	}

	public void setId_indicacao(Long id_indicacao) {
		this.id_indicacao = id_indicacao;
	}
	
}
