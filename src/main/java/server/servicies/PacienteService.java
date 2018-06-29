package server.servicies;

import server.entities.Paciente;
import server.entities.DTOs.PacienteDTO;
import server.entities.DTOs.TipoPessoaDTO;

public interface PacienteService {
	
	/**
	 * Find Paciente by id.
	 * @param id
	 * @return
	 */
	Paciente findById(Long id);
	
	/**
	 * Save Paciente in to database.
	 * @param Paciente
	 * @return
	 */
	Paciente save(PacienteDTO paciente, TipoPessoaDTO tipoPessoa);
	
	/**
	 * Delete Paciente by id.
	 * @param id
	 */
	void delete(Long id);
	
}

