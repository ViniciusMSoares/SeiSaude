package server.servicies;

import java.util.ArrayList;
import java.util.List;

import server.entities.Elemento;
import server.entities.DTOs.ElementoDTO;

public interface ElementoService {
	
	/**
	 * Find Elemento by id.
	 * @param id
	 * @return
	 */
	Elemento findById(Long id);
	
	/**
	 * Find all Elemento.
	 * @return All Elemento in the database;
	 */
	List<Elemento> findAll();
	
	/**
	 * Save Elemento in to database.
	 * @param Elemento
	 * @return
	 */
	Elemento save(ElementoDTO elemento);
	
	/**
	 * Delete Elemento by id.
	 * @param id
	 */
	void delete(Long id);

	ArrayList<Elemento> findByName(String name);
}
