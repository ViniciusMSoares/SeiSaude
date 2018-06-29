package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.TipoPessoa;

public interface TipoPessoaRepository  extends JpaRepository<TipoPessoa, Long> {

}
