package server.servicies;

import java.util.ArrayList;
import java.util.List;

import server.entities.Componente;
import server.entities.Elemento;
import server.entities.ValorNutricional;
import server.entities.DTOs.AlimentoDTO;
import server.entities.DTOs.ComponenteDTO;
import server.entities.DTOs.ElementoDTO;
import server.entities.DTOs.ProdutoDTO;

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
	 * Save Elemento in to database.
	 * @param Elemento
	 * @return
	 */
	Elemento save(ProdutoDTO produto);
	
	/**
	 * Save Elemento in to database.
	 * @param Elemento
	 * @return
	 */
	Elemento save(AlimentoDTO alimento);
	
	/**
	 * Delete Elemento by id.
	 * @param id
	 */
	void delete(Long id);

	ArrayList<Elemento> findByName(String name);
	
	ArrayList<Componente> findComponenteByName(String name);
	
	ArrayList<ValorNutricional> findValNutricionalByName(String name);
	
	boolean elementoInDataBase(String nome);

	Componente saveComponente(ComponenteDTO componente);
	
	boolean componenteInDataBase(String nome);
	
	Elemento findOneByName(String name);
	
	Componente findOneComponenteByName(String name);
	
	List<Componente> findAllComponente();
}
