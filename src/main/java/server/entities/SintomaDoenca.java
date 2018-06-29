package server.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(SintomaDoenca.class)
public class SintomaDoenca implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	private Long id_sintoma;
	
	@Id
	private Long id_doenca;

	public SintomaDoenca(Long id_sintoma, Long id_doenca) {
		super();
		this.id_sintoma = id_sintoma;
		this.id_doenca = id_doenca;
	}

	public SintomaDoenca() {
		super();
	}

	public Long getId_sintoma() {
		return id_sintoma;
	}

	public void setId_sintoma(Long id_sintoma) {
		this.id_sintoma = id_sintoma;
	}

	public Long getId_doenca() {
		return id_doenca;
	}

	public void setId_doenca(Long id_doenca) {
		this.id_doenca = id_doenca;
	}
	
}
