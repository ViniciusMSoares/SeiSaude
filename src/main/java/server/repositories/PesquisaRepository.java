package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Pesquisa;
		
public interface PesquisaRepository extends JpaRepository<Pesquisa, Long> {
	
}

