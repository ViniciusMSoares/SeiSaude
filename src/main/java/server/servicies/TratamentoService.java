package server.servicies;

import server.entities.Tratamento;
import server.entities.TratamentoPaciente;
import server.entities.DTOs.PesquisaDTO;
import server.entities.DTOs.TratamentoDTO;
import server.entities.DTOs.TratamentoPacienteDTO;

public interface TratamentoService {
	
	/**
	 * Find Tratamento by id.
	 * @param id
	 * @return
	 */
	Tratamento findById(Long id);
	
	/**
	 * Save Tratamento in to database.
	 * @param Tratamento
	 * @return
	 */
	Tratamento save(TratamentoDTO tratamento, PesquisaDTO pesquisa);
	
	/**
	 * Save TratamentoPaciente in to database.
	 * @param TratamentoPaciente
	 * @return
	 */
	TratamentoPaciente save(TratamentoPacienteDTO tratamentoPaciente);
	
	/**
	 * Delete Tratamento by id.
	 * @param id
	 */
	void delete(Long id);
	
}
