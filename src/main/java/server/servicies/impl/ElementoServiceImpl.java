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
import server.entities.DTOs.ComponenteDTO;
import server.entities.DTOs.ElementoDTO;
import server.servicies.ElementoService;
import server.repositories.AlimentoRepository;
import server.repositories.ComponenteRepository;
import server.repositories.ComportamentoRepository;
import server.repositories.ElementoRepository;
import server.repositories.QuantidadeRepository;
import server.repositories.RemedioRepository;

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
	
	@Override
	public Elemento findById(Long id) {
		return elementoRepository.getOne(id);
	}

	@Override
	public List<Elemento> findAll() {
		return elementoRepository.findAll();
	}
	
	@Override
	public Elemento save(ElementoDTO elementoDTO, ComponenteDTO componenteDTO) {
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
			for (int i = 0; i < componenteDTO.getValores().length; i++) {
				componente = new Componente(componenteDTO.getName()[i]);
				componenteRepository.save(componente);
				quantidade = new Quantidade(componente.getId(), remedio.getId(), Float.parseFloat(componenteDTO.getValores()[i]), componenteDTO.getUnidades()[i]);
				quantidadeRepository.save(quantidade);
			}
			
			return remedioRepository.save(remedio);
		case 3:
			Alimento alimento = new Alimento(elemento, elementoDTO.getFabricante());
			alimentoRepository.save(alimento);
			Componente componenteA;
			Quantidade quantidadeA;
			for (int i = 0; i < componenteDTO.getValores().length; i++) {
				componenteA = new Componente(componenteDTO.getName()[i]);
				componenteRepository.save(componenteA);
				quantidadeA = new Quantidade(componenteA.getId(), alimento.getId(), Float.parseFloat(componenteDTO.getValores()[i]), componenteDTO.getUnidades()[i]);
				quantidadeRepository.save(quantidadeA);
			}
			
			return alimentoRepository.save(alimento);

		default:
			return elementoRepository.save(elemento);
		}
	}

	@Override
	public void delete(Long id) {
		elementoRepository.deleteById(id);
	}

	@Override
	public ArrayList<Elemento> findByName(String name) {
		ArrayList<Elemento> result = new ArrayList<>();

		for (Elemento elemento : elementoRepository.findAll()) {
			if (elemento.getName().equals(name)) {
				result.add(elemento);
			}
		}
		return result;
	}

}
