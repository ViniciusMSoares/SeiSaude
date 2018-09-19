package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.SintomaDoenca;
		
public interface SintomaDoencaRepository extends JpaRepository<SintomaDoenca, Long> {
	
}