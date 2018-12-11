package server.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import server.entities.Sintoma;
import server.entities.Situacao;
import server.entities.DTOs.DoencaDTO;
import server.entities.DTOs.SituacaoDTO;
import server.servicies.SituacaoService;

@RestController
@CrossOrigin
public class SituacaoController {

	@Autowired
	private SituacaoService situacaoService;
	
	/*@RequestMapping(value = "/situacao", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Situacao> cadastraSituacao(@RequestBody SituacaoDTO situacao) {

		return new ResponseEntity<>(situacaoService.save(situacao), HttpStatus.CREATED);
	}*/
	
	@RequestMapping(value = "/situacao/sintoma", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Situacao> cadastraSintoma(@RequestBody SituacaoDTO sintoma) {
		if (situacaoService.situacaoInDataBase(sintoma.getNome()+sintoma.getComplemento())) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(situacaoService.save(sintoma), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/situacao/doenca", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Situacao> cadastraDoenca(@RequestBody DoencaDTO doenca) {
		if (situacaoService.doencaInDataBase(doenca.getNome()+doenca.getComplemento())) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(situacaoService.save(doenca), HttpStatus.CREATED);
	}
	
	@GetMapping("/situacao")
	public ResponseEntity<ArrayList<Situacao>> getSituacaoByName(@RequestParam(value = "nome") String name) { 
		return new ResponseEntity<ArrayList<Situacao>>(situacaoService.findByName(name), HttpStatus.FOUND);
	}
	
	@RequestMapping(value = "/all_sintoma", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Sintoma>> getAllSintomas() { 
		return new ResponseEntity<ArrayList<Sintoma>>((ArrayList<Sintoma>) situacaoService.findAllSintoma(), HttpStatus.OK);
	}
	
}
