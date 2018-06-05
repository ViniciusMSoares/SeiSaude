package server.servicies;

import java.util.ArrayList;

import server.entities.Situacao;
import server.entities.DTOs.SituacaoDTO;

public interface SituacaoService {

	/**
	 * Find Situacao by id.
	 * @param id
	 * @return
	 */
	Situacao findById(Long id);
	
	/**
	 * Save Situacao in to database.
	 * @param Situacao
	 * @return
	 */
	Situacao save(SituacaoDTO situacao);
	
	/**
	 * Delete Situacao by id.
	 * @param id
	 */
	void delete(Long id);

	ArrayList<Situacao> findByName(String name);
}
