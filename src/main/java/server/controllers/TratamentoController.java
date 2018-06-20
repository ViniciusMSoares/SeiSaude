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
import server.entities.DTOs.TratamentoDTO;
import server.servicies.TratamentoService;

@RestController
public class TratamentoController {

	@Autowired
	private TratamentoService tratamentoService;
	
	@RequestMapping(value = "/tratamento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Tratamento> cadastraTratamento(@RequestBody TratamentoDTO tratamento) {

		return new ResponseEntity<>(tratamentoService.save(tratamento), HttpStatus.CREATED);
	}
	
}
