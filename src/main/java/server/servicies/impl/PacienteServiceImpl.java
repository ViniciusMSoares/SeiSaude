package server.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.repositories.PacienteRepository;
import server.repositories.TipoPessoaRepository;
import server.entities.Paciente;
import server.entities.TipoPessoa;
import server.entities.DTOs.PacienteDTO;
import server.entities.DTOs.TipoPessoaDTO;
import server.servicies.PacienteService;

@Service
public class PacienteServiceImpl implements PacienteService {

	@Autowired
	private PacienteRepository pacienteRepository;
	
	@Autowired
	private TipoPessoaRepository tipoPessoaRepository;
	
	@Override
	public Paciente findById(Long id) {
		return pacienteRepository.getOne(id);
	}

	@Override
	public Paciente save(PacienteDTO pacienteDTO, TipoPessoaDTO tipoPessoaDTO) {
		Paciente paciente = new Paciente(pacienteDTO.getNome(), pacienteDTO.getIdade(), pacienteDTO.getPeso(),
				pacienteDTO.getAltura(), pacienteDTO.getTipoSanguineo());
		TipoPessoa tipoPessoa = new TipoPessoa(tipoPessoaDTO.getAlergias(), tipoPessoaDTO.getOutros());
		
		tipoPessoaRepository.save(tipoPessoa);
		return pacienteRepository.save(paciente);
	}

	@Override
	public void delete(Long id) {
		pacienteRepository.deleteById(id);
	}
	
}

