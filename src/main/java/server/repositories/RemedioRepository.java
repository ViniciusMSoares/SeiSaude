package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Remedio;
		
public interface RemedioRepository extends JpaRepository<Remedio, Long> {
	
}