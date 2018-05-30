package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.ValorNutricional;
	
public interface ValorNutricionalRepository extends JpaRepository<ValorNutricional, Long> {

}