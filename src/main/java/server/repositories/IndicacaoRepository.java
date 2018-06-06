package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Indicacao;

public interface IndicacaoRepository  extends JpaRepository<Indicacao, Long> {

}
