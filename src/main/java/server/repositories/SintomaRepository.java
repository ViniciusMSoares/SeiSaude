package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Sintoma;
		
public interface SintomaRepository extends JpaRepository<Sintoma, Long> {
	
}
