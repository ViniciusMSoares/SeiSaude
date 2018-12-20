package server.entities.DTOs;

public class ProdutoDTO extends ElementoDTO {

	private QuantidadeDTO[] componentes;
	
	public ProdutoDTO() {
		super();
	}

	public QuantidadeDTO[] getComponentes() {
		return componentes;
	}

	public void setComponentes(QuantidadeDTO[] componentes) {
		this.componentes = componentes;
	}

}
