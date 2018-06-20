package server.servicies;

import server.entities.Tratamento;
import server.entities.DTOs.TratamentoDTO;

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
	Tratamento save(TratamentoDTO tratamento);
	
	/**
	 * Delete Tratamento by id.
	 * @param id
	 */
	void delete(Long id);
	
}
