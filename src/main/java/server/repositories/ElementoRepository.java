package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Elemento;
		
public interface ElementoRepository extends JpaRepository<Elemento, Long> {
	
}
