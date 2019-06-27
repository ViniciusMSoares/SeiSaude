package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import server.entities.Indicacao;
import server.entities.DTOs.IndicacaoDTO;
import server.servicies.IndicacaoService;

@RestController
@CrossOrigin
public class IndicacaoController {

	@Autowired
	private IndicacaoService indicacaoService;
	
	@RequestMapping(value = "/indicacao", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Indicacao> cadastraIndicacao(@RequestBody IndicacaoDTO indicacao) {

		return new ResponseEntity<>(indicacaoService.save(indicacao), HttpStatus.CREATED);
	}
	
}
