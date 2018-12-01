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
				elementoDTO.getCadastradoPor());

		Comportamento comportamento = new Comportamento(elemento);
			
		return comportamentoRepository.save(comportamento);
	}

	@Override
	public Elemento save(ProdutoDTO produtoDTO) {
		Elemento elemento = new Elemento(produtoDTO.getNome(), produtoDTO.getDescricao(),
				produtoDTO.getCadastradoPor());
		
		Remedio remedio = new Remedio(elemento, produtoDTO.getFabricante());
		remedioRepository.save(remedio);
		Componente componente;
		Quantidade quantidade;
		if (produtoDTO.getUnidadesComponente() != null) {
			for (int i = 0; i < produtoDTO.getUnidadesComponente().length; i++) {
				componente = new Componente(produtoDTO.getNomeComponente()[i]);
				componenteRepository.save(componente);
				quantidade = new Quantidade(componente.getId(), remedio.getId(), Float.parseFloat(produtoDTO.getValoresComponente()[i]), produtoDTO.getUnidadesComponente()[i]);
				quantidadeRepository.save(quantidade);
			}
		}

		return remedioRepository.save(remedio);
	}

	@Override
	public Elemento save(AlimentoDTO alimentoDTO) {
		Elemento elemento = new Elemento(alimentoDTO.getNome(), alimentoDTO.getDescricao(),
				alimentoDTO.getCadastradoPor());
		
		Alimento alimento = new Alimento(elemento, alimentoDTO.getFabricante());
		alimentoRepository.save(alimento);
		Componente componenteA;
		Quantidade quantidadeA;
		if (alimentoDTO.getUnidadesComponente() != null) {
			for (int i = 0; i < alimentoDTO.getUnidadesComponente().length; i++) {
				componenteA = new Componente(alimentoDTO.getNomeComponente()[i]);
				componenteRepository.save(componenteA);
				quantidadeA = new Quantidade(componenteA.getId(), alimento.getId(), Float.parseFloat(alimentoDTO.getValoresComponente()[i]),
						alimentoDTO.getUnidadesComponente()[i]);
				quantidadeRepository.save(quantidadeA);
			}
		}
		
		ValorNutricional valorNutricional;
		Valor valor;
		if (alimentoDTO.getQuantidadesVNutricional() != null) {
			for (int i = 0; i < alimentoDTO.getQuantidadesVNutricional().length; i++) {
				valorNutricional = new ValorNutricional(alimentoDTO.getNomeVNutricional()[i]);
				valorNutricionalRepository.save(valorNutricional);
				valor = new Valor(valorNutricional.getId(), alimento.getId(), Float.parseFloat(alimentoDTO.getValoresVNutricional()[i]),
						Float.parseFloat(alimentoDTO.getQuantidadesVNutricional()[i]), alimentoDTO.getUnidadesVNutricional()[i]);
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
		name = name.toLowerCase();

		for (Elemento elemento : elementoRepository.findAll()) {
			String elementoName = elemento.getName().toLowerCase();
			if (elementoName.equals(name) || elementoName.contains(name)) {
				result.add(elemento);
			}
		}
		return result;
	}

	@Override
	public ArrayList<Componente> findComponenteByName(String name) {
		ArrayList<Componente> result = new ArrayList<>();
		name = name.toLowerCase();

		for (Componente componente : componenteRepository.findAll()) {
			String elementoName = componente.getNome().toLowerCase();
			if (elementoName.equals(name) || elementoName.contains(name)) {
				result.add(componente);
			}
		}
		return result;
	}
	
	public boolean elementoInDataBase(String nome) {
		nome = nome.toLowerCase();
		
		for (Elemento elemento : elementoRepository.findAll()) {
			String elementoName = elemento.getName().toLowerCase();
			if (elementoName.equals(nome)) {
				return true;
			}
		}
		
		return false;
	}
	
	@Override
	public String[] saveComponente(ComponenteDTO componenteDTO) {
		Componente componente;
		if (componenteDTO.getNomeComponente() != null) {
			for (int i = 0; i < componenteDTO.getNomeComponente().length; i++) {
				componente = new Componente(componenteDTO.getNomeComponente()[i]);
				componenteRepository.save(componente);
			}
		}
		return componenteDTO.getNomeComponente();
	}
	
	public String[] componenteInDataBase(String[] nome) {
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
	}
	
}

/*
	@Override
	public Elemento save(ElementoDTO elementoDTO, ComponenteDTO componenteDTO, ValorNutricionalDTO valorNutricionalDTO) {
		Elemento elemento = new Elemento(elementoDTO.getName(), elementoDTO.getDescricao(),
				elementoDTO.getCadastradoPor());
		
		switch (elementoDTO.getTipo()) {
		case 1:
			Comportamento comportamento = new Comportamento(elemento);
			
			return comportamentoRepository.save(comportamento);
		case 2:
			Remedio remedio = new Remedio(elemento, elementoDTO.getFabricante());
			remedioRepository.save(remedio);
			Componente componente;
			Quantidade quantidade;
			if (componenteDTO.getUnidadesComponente() != null) {
				for (int i = 0; i < componenteDTO.getUnidadesComponente().length/2; i++) {
					componente = new Componente(componenteDTO.getNomeComponente()[i]);
					componenteRepository.save(componente);
					quantidade = new Quantidade(componente.getId(), remedio.getId(), Float.parseFloat(componenteDTO.getValoresComponente()[i]), componenteDTO.getUnidadesComponente()[i]);
					quantidadeRepository.save(quantidade);
				}
			}

			return remedioRepository.save(remedio);
		case 3:
			Alimento alimento = new Alimento(elemento, elementoDTO.getFabricante());
			alimentoRepository.save(alimento);
			Componente componenteA;
			Quantidade quantidadeA;
			if (componenteDTO.getUnidadesComponente() != null) {
				for (int i = 0; i < componenteDTO.getUnidadesComponente().length/2; i++) {
					componenteA = new Componente(componenteDTO.getNomeComponente()[i]);
					componenteRepository.save(componenteA);
					quantidadeA = new Quantidade(componenteA.getId(), alimento.getId(), Float.parseFloat(componenteDTO.getValoresComponente()[i]), componenteDTO.getUnidadesComponente()[i]);
					quantidadeRepository.save(quantidadeA);
				}
			}
			
			ValorNutricional valorNutricional;
			Valor valor;
			if (valorNutricionalDTO.getQuantidadesVNutricional() != null) {
				for (int i = 0; i < valorNutricionalDTO.getQuantidadesVNutricional().length; i++) {
					valorNutricional = new ValorNutricional(valorNutricionalDTO.getNomeVNutricional()[i]);
					valorNutricionalRepository.save(valorNutricional);
					valor = new Valor(valorNutricional.getId(), alimento.getId(), Float.parseFloat(valorNutricionalDTO.getValoresVNutricional()[i]), 
					Float.parseFloat(valorNutricionalDTO.getQuantidadesVNutricional()[i]), valorNutricionalDTO.getUnidadesVNutricional()[i]);
					valorRepository.save(valor);
				}
			}
			
			return alimentoRepository.save(alimento);
		default:
			
			return elementoRepository.save(elemento);
		}
	}
 */
