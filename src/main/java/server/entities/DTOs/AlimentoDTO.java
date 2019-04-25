package server.entities.DTOs;

public class AlimentoDTO extends ProdutoDTO {
	
	private ValorNutricionalDTO[] valNutricionais;
	
	public AlimentoDTO() {
		super();
	}

	public ValorNutricionalDTO[] getValNutricionais() {
		return valNutricionais;
	}

	public void setValNutricionais(ValorNutricionalDTO[] valNutricionais) {
		this.valNutricionais = valNutricionais;
	}

}
