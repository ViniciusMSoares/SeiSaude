package server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Produto extends Elemento {
	
	@Transient
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_produto")
	private Long id;
	
	@NotEmpty
	private String fabricante;
	
	public Produto(String name, String descricao, String cadastradoPor, String fabricante) {
		super(name, descricao, cadastradoPor);
		this.id = super.getId();
		this.fabricante = fabricante;
		// TODO Auto-generated constructor stub
	}

	public Produto() {
		// TODO Auto-generated constructor stub
	}

	public String getFabricante() {
		return fabricante;
	}

	public void setFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	
}
