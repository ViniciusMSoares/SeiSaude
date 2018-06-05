package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Situacao;
		
public interface SituacaoRepository extends JpaRepository<Situacao, Long> {
	
}
