package server.servicies;

import server.entities.Indicacao;
import server.entities.DTOs.IndicacaoDTO;

public interface IndicacaoService {
	
	/**
	 * Find Indicacao by id.
	 * @param id
	 * @return
	 */
	Indicacao findById(Long id);
	
	/**
	 * Save Indicacao in to database.
	 * @param Indicacao
	 * @return
	 */
	Indicacao save(IndicacaoDTO indicacao);
	
	/**
	 * Delete Indicacao by id.
	 * @param id
	 */
	void delete(Long id);
	
}
