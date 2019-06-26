package server.servicies.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Alimento;
import server.entities.Componente;
import server.entities.Comportamento;
import server.entities.Elemento;
import server.entities.Quantidade;
import server.entities.Remedio;
import server.entities.Valor;
import server.entities.ValorNutricional;
import server.entities.DTOs.AlimentoDTO;
import server.entities.DTOs.ComponenteDTO;
import server.entities.DTOs.ElementoDTO;
import server.entities.DTOs.ProdutoDTO;
import server.servicies.ElementoService;
import server.repositories.AlimentoRepository;
import server.repositories.ComponenteRepository;
import server.repositories.ComportamentoRepository;
import server.repositories.ElementoRepository;
import server.repositories.QuantidadeRepository;
import server.repositories.RemedioRepository;
import server.repositories.ValorNutricionalRepository;
import server.repositories.ValorRepository;

@Service
public class ElementoServiceImpl implements ElementoService {

	@Autowired
	private ElementoRepository elementoRepository;
	
	@Autowired
	private ComportamentoRepository comportamentoRepository;
	
	@Autowired
	private RemedioRepository remedioRepository;
	
	@Autowired
	private AlimentoRepository alimentoRepository;
	
	@Autowired
	private ComponenteRepository componenteRepository;
	
	@Autowired
	private QuantidadeRepository quantidadeRepository;
	
	@Autowired
	private ValorNutricionalRepository valorNutricionalRepository;
	
	@Autowired
	private ValorRepository valorRepository;
	
	@Override
	public Elemento findById(Long id) {
		return elementoRepository.getOne(id);
	}

	@Override
	public List<Elemento> findAll() {
		return elementoRepository.findAll();
	}
	
	@Override
	public Elemento save(ElementoDTO elementoDTO) {
		Elemento elemento = new Elemento(elementoDTO.getNome(), elementoDTO.getDescricao(),
				elementoDTO.getCadastradoPor(), elementoDTO.getComplemento());

		Comportamento comportamento = new Comportamento(elemento);
			
		return comportamentoRepository.save(comportamento);
	}

	@Override
	public Elemento save(ProdutoDTO produtoDTO) {
		Elemento elemento = new Elemento(produtoDTO.getNome(), produtoDTO.getDescricao(),
				produtoDTO.getCadastradoPor(), produtoDTO.getComplemento());
		
		Remedio remedio = new Remedio(elemento, produtoDTO.getFabricante());
		remedioRepository.save(remedio);
		Componente componente;
		Quantidade quantidade;
		
		if (produtoDTO.getComponentes() != null) {
			for (int i = 0; i < produtoDTO.getComponentes().length; i++) {
				ArrayList<Componente> componentes = findComponenteByName(produtoDTO.getComponentes()[i].getNome());
				
				if (componentes.size() == 0) {
					componente = new Componente(produtoDTO.getComponentes()[i].getNome(), "");//falta complemento
					componenteRepository.save(componente);
				} else {
					componente = componentes.get(0);
				}
				quantidade = new Quantidade(componente.getId(), remedio.getId(), Float.parseFloat(produtoDTO.getComponentes()[i].getValor()),
						produtoDTO.getComponentes()[i].getUnidade());
				quantidadeRepository.save(quantidade);
			}
		}

		/*
		if (produtoDTO.getComponentes() != null) {
			for (int i = 0; i < produtoDTO.getComponentes().length; i++) {
				componente = new Componente(produtoDTO.getComponentes()[i].getNome(), "");//falta complemento
				componenteRepository.save(componente);
				quantidade = new Quantidade(componente.getId(), remedio.getId(), Float.parseFloat(produtoDTO.getComponentes()[i].getValor()), produtoDTO.getComponentes()[i].getUnidade());
				quantidadeRepository.save(quantidade);
			}
		}*/

		return remedioRepository.save(remedio);
	}

	@Override
	public Elemento save(AlimentoDTO alimentoDTO) {
		Elemento elemento = new Elemento(alimentoDTO.getNome(), alimentoDTO.getDescricao(),
				alimentoDTO.getCadastradoPor(), alimentoDTO.getComplemento());
		
		Alimento alimento = new Alimento(elemento, alimentoDTO.getFabricante());
		alimentoRepository.save(alimento);
		Componente componenteA;
		Quantidade quantidadeA;
		
		if (alimentoDTO.getComponentes() != null) {
			for (int i = 0; i < alimentoDTO.getComponentes().length; i++) {
				ArrayList<Componente> componentes = findComponenteByName(alimentoDTO.getComponentes()[i].getNome());
				
				if (componentes.size() == 0) {
					componenteA = new Componente(alimentoDTO.getComponentes()[i].getNome(), "");//falta complemento
					componenteRepository.save(componenteA);
				} else {
					componenteA = componentes.get(0);
				}
				quantidadeA = new Quantidade(componenteA.getId(), alimento.getId(), Float.parseFloat(alimentoDTO.getComponentes()[i].getValor()),
						alimentoDTO.getComponentes()[i].getUnidade());
				quantidadeRepository.save(quantidadeA);
			}
		}
		
		ValorNutricional valorNutricional;
		Valor valor;
		
		if (alimentoDTO.getValNutricionais() != null) {
			for (int i = 0; i < alimentoDTO.getValNutricionais().length; i++) {
				ArrayList<ValorNutricional> valNutricionais = findValNutricionalByName(alimentoDTO.getValNutricionais()[i].getNome());
				
				if (valNutricionais.size() == 0) {
					valorNutricional = new ValorNutricional(alimentoDTO.getValNutricionais()[i].getNome());
					valorNutricionalRepository.save(valorNutricional);
				} else {
					valorNutricional = valNutricionais.get(0);
				}
				valor = new Valor(valorNutricional.getId(), alimento.getId(), Float.parseFloat(alimentoDTO.getValNutricionais()[i].getValorDiario()),
						Float.parseFloat(alimentoDTO.getValNutricionais()[i].getQuantidade()), alimentoDTO.getValNutricionais()[i].getUnidade());
				valorRepository.save(valor);
			}
		}
		
		return alimentoRepository.save(alimento);
	}

	@Override
	public void delete(Long id) {
		elementoRepository.deleteById(id);
	}

	@Override
	public ArrayList<Elemento> findByName(String name) {
		ArrayList<Elemento> result = new ArrayList<>();
		name = name.toLowerCase().replaceAll("\\s", "");
		
		for (Elemento elemento : elementoRepository.findAll()) {
			if (elemento.getComplemento() == null) {
				elemento.setComplemento("");
			}
			String elementoName = elemento.getNome().toLowerCase() + elemento.getComplemento().toLowerCase();
			elementoName = elementoName.replaceAll("\\s", "");
			if (elementoName.equals(name) || elementoName.contains(name)) {
				result.add(elemento);
			}
		}
		return result;
	}

	@Override
	public ArrayList<Componente> findComponenteByName(String name) {
		ArrayList<Componente> result = new ArrayList<>();
		name = name.toLowerCase().replaceAll("\\s", "");

		for (Componente componente : componenteRepository.findAll()) {
			String elementoName = (componente.getNome() + componente.getComplemento()).toLowerCase().replaceAll("\\s", "");
			if (elementoName.equals(name) || elementoName.contains(name)) {
				result.add(componente);
			}
		}
		return result;
	}
	
	@Override
	public ArrayList<ValorNutricional> findValNutricionalByName(String name) {
		ArrayList<ValorNutricional> result = new ArrayList<>();
		name = name.toLowerCase().replaceAll("\\s", "");

		for (ValorNutricional valNutricional : valorNutricionalRepository.findAll()) {
			String elementoName = valNutricional.getNome().toLowerCase().replaceAll("\\s", "");
			if (elementoName.equals(name) || elementoName.contains(name)) {
				result.add(valNutricional);
			}
		}
		return result;
	}
	
	public boolean elementoInDataBase(String nome) {
		nome = nome.toLowerCase().replaceAll("\\s", "");
		
		for (Elemento elemento : elementoRepository.findAll()) {
			String elementoName = elemento.getNome().toLowerCase();
			if (elemento.getComplemento() != null) {
				elementoName += elemento.getComplemento().toLowerCase();
			}
			elementoName = elementoName.replaceAll("\\s", "");
			if (elementoName.equals(nome)) {
				return true;
			}
		}
		
		return false;
	}
	
	@Override
	public Componente saveComponente(ComponenteDTO componenteDTO) {
		Componente componente = new Componente(componenteDTO.getNome(), componenteDTO.getComplemento());
		return componenteRepository.save(componente);
	}
	
	public boolean componenteInDataBase(String nome) {
		nome = nome.toLowerCase().replaceAll("\\s", "");
		
		for (Componente componente : componenteRepository.findAll()) {
			String componenteName = componente.getNome().toLowerCase();
			if (componente.getComplemento() != null) {
				componenteName += componente.getComplemento().toLowerCase();
			}
			componenteName = componenteName.replaceAll("\\s", "");
			if (componenteName.equals(nome)) {
				return true;
			}
		}
		
		return false;
		
		/*
		String[] result;
		String[] parcial = new String[nome.length];
		int repetidos = 0;
 		
		for (int i = 0; i < nome.length; i++) {
			nome[i] = nome[i].toLowerCase();
			
			for (Componente componente : componenteRepository.findAll()) {
				String componenteName = componente.getNome().toLowerCase();
				if (componenteName.equals(nome[i])) {
					parcial[repetidos] = componente.getNome();
					repetidos++;
				}
			}
		}
		
		result = new String[repetidos];
		for (int i = 0; i < repetidos; i++) {
			result[i] = parcial[i];
		}
		
		return result;
		*/
	}

	public Elemento findOneByName(String name) {
		name = name.toLowerCase();

		for (Elemento elemento : elementoRepository.findAll()) {
			if (elemento.getComplemento() == null) {
				elemento.setComplemento("");
			}
			String elementoName = elemento.getNome().toLowerCase() + elemento.getComplemento().toLowerCase();
			if (elementoName.equals(name)) {
				return elemento;
			}
		}
		return null;
	}

	@Override
	public Componente findOneComponenteByName(String name) {
		name = name.toLowerCase();

		for (Componente componente : componenteRepository.findAll()) {
			String elementoName = componente.getNome().toLowerCase() + componente.getComplemento().toLowerCase();
			if (elementoName.equals(name)) {
				return componente;
			}
		}
		return null;
	}

	@Override
	public List<Componente> findAllComponente() {
		return componenteRepository.findAll();
	}

	@Override
	public Elemento update(ElementoDTO elementoDTO) {
		Elemento elemento = findOneByName(elementoDTO.getNome()+elementoDTO.getComplemento());
		
		elemento.setDescricao(elementoDTO.getDescricao());
		elemento.setCadastradoPor(elementoDTO.getCadastradoPor());
			
		return elementoRepository.save(elemento);
	}
	
	@Override
	public List<ValorNutricional> findAllValNutri() {
		return valorNutricionalRepository.findAll();
	}

}
