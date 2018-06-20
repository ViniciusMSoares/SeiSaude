package server.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.repositories.TratamentoRepository;
import server.entities.Tratamento;
import server.entities.DTOs.TratamentoDTO;
import server.servicies.TratamentoService;

@Service
public class TratamentoServiceImpl implements TratamentoService {

	@Autowired
	private TratamentoRepository tratamentoRepository;
	
	@Override
	public Tratamento findById(Long id) {
		return tratamentoRepository.getOne(id);
	}

	@Override
	public Tratamento save(TratamentoDTO tratamentoDTO) {
		Tratamento tratamento = new Tratamento(tratamentoDTO.getDescricao(), tratamentoDTO.getTipo());
		return tratamentoRepository.save(tratamento);
	}

	@Override
	public void delete(Long id) {
		tratamentoRepository.deleteById(id);
	}
	
}
