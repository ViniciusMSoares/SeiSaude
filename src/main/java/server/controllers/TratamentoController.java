package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import server.entities.Tratamento;
import server.entities.TratamentoPaciente;
import server.entities.DTOs.PesquisaDTO;
import server.entities.DTOs.TratamentoDTO;
import server.entities.DTOs.TratamentoPacienteDTO;
import server.servicies.TratamentoService;

@RestController
public class TratamentoController {

	@Autowired
	private TratamentoService tratamentoService;
	
	@RequestMapping(value = "/tratamento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Tratamento> cadastraTratamento(@RequestBody TratamentoDTO tratamento, PesquisaDTO pesquisa) {

		return new ResponseEntity<>(tratamentoService.save(tratamento, pesquisa), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/tratamento-paciente", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<TratamentoPaciente> cadastraTratamentoPaciente(@RequestBody TratamentoPacienteDTO tratamentoPaciente) {

		return new ResponseEntity<>(tratamentoService.save(tratamentoPaciente), HttpStatus.CREATED);
	}
}
