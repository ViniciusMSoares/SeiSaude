package server.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import server.entities.Elemento;
import server.entities.DTOs.ComponenteDTO;
import server.entities.DTOs.ElementoDTO;
import server.entities.DTOs.ValorNutricionalDTO;
import server.servicies.ElementoService;

@RestController
public class ElementoController {

	@Autowired
	private ElementoService elementoService;
	
	@RequestMapping(value = "/elemento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraElemento(@RequestBody ElementoDTO elemento, ComponenteDTO componente, ValorNutricionalDTO valorNutricional) {

		return new ResponseEntity<>(elementoService.save(elemento, componente, valorNutricional), HttpStatus.CREATED);
	}
	
	@GetMapping("/elemento")
	public ResponseEntity<ArrayList<Elemento>> getElementosByName(@RequestParam(value = "name") String name) { 
		return new ResponseEntity<ArrayList<Elemento>>(elementoService.findByName(name), HttpStatus.FOUND);
	}

	@RequestMapping(value = "/all_elemento", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Elemento>> getAllElementos() { 
		return new ResponseEntity<ArrayList<Elemento>>((ArrayList<Elemento>) elementoService.findAll(), HttpStatus.FOUND);
	}
	
}
