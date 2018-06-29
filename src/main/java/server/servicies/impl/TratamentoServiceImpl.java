package server.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.repositories.PesquisaRepository;
import server.repositories.TratamentoPacienteRepository;
import server.repositories.TratamentoRepository;
import server.entities.Pesquisa;
import server.entities.Tratamento;
import server.entities.TratamentoPaciente;
import server.entities.DTOs.PesquisaDTO;
import server.entities.DTOs.TratamentoDTO;
import server.entities.DTOs.TratamentoPacienteDTO;
import server.servicies.TratamentoService;

@Service
public class TratamentoServiceImpl implements TratamentoService {

	@Autowired
	private TratamentoRepository tratamentoRepository;
	
	@Autowired
	private TratamentoPacienteRepository tratamentoPacienteRepository;

	@Autowired
	private PesquisaRepository pesquisaRepository;
	
	@Override
	public Tratamento findById(Long id) {
		return tratamentoRepository.getOne(id);
	}

	@Override
	public Tratamento save(TratamentoDTO tratamentoDTO, PesquisaDTO pesquisaDTO) {
		Tratamento tratamento = new Tratamento(tratamentoDTO.getDescricao(), tratamentoDTO.getTipo());
		Pesquisa pesquisa = new Pesquisa(pesquisaDTO.getFonte(), pesquisaDTO.getOrigem());
		
		pesquisaRepository.save(pesquisa);
		return tratamentoRepository.save(tratamento);
	}

	@Override
	public TratamentoPaciente save(TratamentoPacienteDTO tratamentoPacienteDTO) {
		TratamentoPaciente tratamentoPaciente = new TratamentoPaciente();
		return tratamentoPacienteRepository.save(tratamentoPaciente);
	}
	
	@Override
	public void delete(Long id) {
		tratamentoRepository.deleteById(id);
	}
	
}
