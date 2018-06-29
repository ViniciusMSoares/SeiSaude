package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.entities.TratamentoPaciente;

public interface TratamentoPacienteRepository  extends JpaRepository<TratamentoPaciente, Long> {

}
