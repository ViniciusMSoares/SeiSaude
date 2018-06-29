package server.entities.DTOs;

public class TratamentoPacienteDTO {

	private String inicio;

	private String fim;

	private String feedback;
	
	private Long id_tratamento;
	
	private Long id_paciente;
	
	public TratamentoPacienteDTO() {
	}

	public String getInicio() {
		return inicio;
	}

	public void setInicio(String inicio) {
		this.inicio = inicio;
	}

	public String getFim() {
		return fim;
	}

	public void setFim(String fim) {
		this.fim = fim;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public Long getId_tratamento() {
		return id_tratamento;
	}

	public void setId_tratamento(Long id_tratamento) {
		this.id_tratamento = id_tratamento;
	}

	public Long getId_paciente() {
		return id_paciente;
	}

	public void setId_paciente(Long id_paciente) {
		this.id_paciente = id_paciente;
	}
	
}
