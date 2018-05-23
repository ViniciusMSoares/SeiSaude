package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Componente;
		
public interface ComponenteRepository extends JpaRepository<Componente, Long> {
	
}
