package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import server.entities.Paciente;
import server.entities.DTOs.PacienteDTO;
import server.entities.DTOs.TipoPessoaDTO;
import server.servicies.PacienteService;

@RestController
public class PacienteController {

	@Autowired
	private PacienteService pacienteService;
	
	@RequestMapping(value = "/paciente", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Paciente> cadastraPaciente(@RequestBody PacienteDTO paciente, TipoPessoaDTO tipoPessoa) {

		return new ResponseEntity<>(pacienteService.save(paciente, tipoPessoa), HttpStatus.CREATED);
	}
	
}
