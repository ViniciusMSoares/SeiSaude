package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Comportamento;
		
public interface ComportamentoRepository extends JpaRepository<Comportamento, Long> {
	
}
