package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Doenca;
		
public interface DoencaRepository extends JpaRepository<Doenca, Long> {
	
}
