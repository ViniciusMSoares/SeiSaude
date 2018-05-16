package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import server.entities.Elemento;
import server.servicies.ElementoService;

public class ElementoController {

	@Autowired
	private ElementoService elementoService;
	
	@RequestMapping(value = "/elemento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraElemento() {
		
		
		return new ResponseEntity<>(elementoService.save(new Elemento()), HttpStatus.CREATED);
	}
	
}
