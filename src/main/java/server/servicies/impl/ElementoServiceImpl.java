package server.servicies.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Alimento;
import server.entities.Comportamento;
import server.entities.Elemento;
import server.entities.Remedio;
import server.entities.DTOs.ElementoDTO;
import server.servicies.ElementoService;
import server.repositories.ElementoRepository;

@Service
public class ElementoServiceImpl implements ElementoService {

	@Autowired
	private ElementoRepository elementoRepository;
	
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
		Elemento elemento = new Elemento(elementoDTO.getName(), elementoDTO.getDescricao(),
				elementoDTO.getCadastradoPor());
		
		switch (elementoDTO.getTipo()) {
		case 1:
			Comportamento comportamento = (Comportamento) elemento;
			
			return elementoRepository.save(comportamento);
		case 2:
			Remedio remedio = (Remedio) elemento;
			remedio.setFabricante(elementoDTO.getFabricante());
			
			return elementoRepository.save(remedio);
		case 3:
			Alimento alimento = (Alimento) elemento;
			alimento.setFabricante(elementoDTO.getFabricante());
			
			return elementoRepository.save(alimento);

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
