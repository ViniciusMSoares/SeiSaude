package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.Tratamento;

public interface TratamentoRepository  extends JpaRepository<Tratamento, Long> {

}
