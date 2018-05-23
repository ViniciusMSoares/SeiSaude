package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Quantidade;
		
public interface QuantidadeRepository extends JpaRepository<Quantidade, Long> {
	
}
