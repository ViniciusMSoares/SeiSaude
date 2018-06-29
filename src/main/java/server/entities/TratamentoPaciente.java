package server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class TratamentoPaciente {
	
	@Transient
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_TratamentoPaciente")
	private Long id;
	
	@NotEmpty()
	@Column()
	private String inicio;

	private String fim;
	
	@NotEmpty
	private String feedback;

	public TratamentoPaciente(@NotEmpty String inicio, String fim, @NotEmpty String feedback) {
		super();
		this.inicio = inicio;
		this.fim = fim;
		this.feedback = feedback;
	}

	public TratamentoPaciente() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
}
