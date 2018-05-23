package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Alimento;
		
public interface AlimentoRepository extends JpaRepository<Alimento, Long> {
	
}