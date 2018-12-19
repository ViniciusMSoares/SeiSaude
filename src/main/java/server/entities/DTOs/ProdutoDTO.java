package server.entities.DTOs;

public class ProdutoDTO extends ElementoDTO {

	private String[] nomeComponente;
	
	private String[] valoresComponente;
	
	private String[] unidadesComponente;
	
	private QuantidadeDTO[] componentes;
	
	public ProdutoDTO() {
		super();
	}

	public String[] getNomeComponente() {
		return nomeComponente;
	}

	public void setNomeComponente(String[] nomeComponente) {
		this.nomeComponente = nomeComponente;
	}

	public String[] getValoresComponente() {
		return valoresComponente;
	}

	public void setValoresComponente(String[] valoresComponente) {
		this.valoresComponente = valoresComponente;
	}

	public String[] getUnidadesComponente() {
		return unidadesComponente;
	}

	public void setUnidadesComponente(String[] unidadesComponente) {
		this.unidadesComponente = unidadesComponente;
	}

	public QuantidadeDTO[] getComponentes() {
		return componentes;
	}

	public void setComponentes(QuantidadeDTO[] componentes) {
		this.componentes = componentes;
	}

}
