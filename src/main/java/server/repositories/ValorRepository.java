package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Valor;
	
public interface ValorRepository extends JpaRepository<Valor, Long> {

}
