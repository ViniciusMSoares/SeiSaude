package server.servicies.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Elemento;
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
	public Elemento save(Elemento elemento) {
		return elementoRepository.save(elemento);
	}

	@Override
	public void delete(Long id) {
		elementoRepository.deleteById(id);
	}

}
