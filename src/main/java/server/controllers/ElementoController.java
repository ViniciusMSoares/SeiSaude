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

import server.entities.Componente;
import server.entities.Elemento;
import server.entities.ValorNutricional;
import server.entities.DTOs.AlimentoDTO;
import server.entities.DTOs.ComponenteDTO;
import server.entities.DTOs.ElementoDTO;
import server.entities.DTOs.ProdutoDTO;
import server.servicies.ElementoService;

@RestController
@CrossOrigin
public class ElementoController {

	@Autowired
	private ElementoService elementoService;
	
/*	@RequestMapping(value = "/elemento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraElemento(@RequestBody ElementoDTO elemento, ComponenteDTO componente, ValorNutricionalDTO valorNutricional) {

		return new ResponseEntity<>(elementoService.save(elemento, componente, valorNutricional), HttpStatus.CREATED);
	}*/
	
	@RequestMapping(value = "/elemento/comportamento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraComportamento(@RequestBody ElementoDTO elemento) {
		String elementoName = elemento.getNome();
		if (elemento.getComplemento() != null) {
			elementoName += elemento.getComplemento();
		}
		if (elementoService.elementoInDataBase(elementoName)) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(elementoService.save(elemento), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/elemento/remedio", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraRemedio(@RequestBody ProdutoDTO remedio) {
		String remedioName = remedio.getNome();
		if (remedio.getComplemento() != null) {
			remedioName += remedio.getComplemento();
		}
		if (elementoService.elementoInDataBase(remedioName)) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(elementoService.save(remedio), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/elemento/alimento", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> cadastraAlimento(@RequestBody AlimentoDTO alimento) {
		String alimentoName = alimento.getNome();
		if (alimento.getComplemento() != null) {
			alimentoName += alimento.getComplemento();
		}
		if (elementoService.elementoInDataBase(alimentoName)) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(elementoService.save(alimento), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/elementos", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Elemento>> getElementosByName(@RequestParam(value = "nome")  String search) { 
		return new ResponseEntity<ArrayList<Elemento>>(elementoService.findByName(search), HttpStatus.OK);
	}

	@RequestMapping(value = "/all_elemento", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Elemento>> getAllElementos() { 
		return new ResponseEntity<ArrayList<Elemento>>((ArrayList<Elemento>) elementoService.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/elemento/componentes")
	public ResponseEntity<ArrayList<Componente>> getComponentesByName(@RequestParam(value = "nome") String name) { 
		return new ResponseEntity<ArrayList<Componente>>(elementoService.findComponenteByName(name), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/elemento/componente", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Object> cadastraComponente(@RequestBody ComponenteDTO componente) {
		String componenteName = componente.getNome();
		if (componente.getComplemento() != null) {
			componenteName += componente.getComplemento();
		}
		if (elementoService.componenteInDataBase(componenteName)) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(elementoService.saveComponente(componente), HttpStatus.CREATED);
	}

	@RequestMapping(value = "/elemento/id", method = RequestMethod.GET)
	public ResponseEntity<Elemento> getElementoById(@RequestParam(value = "id") Long id) { 
		return new ResponseEntity<Elemento>(elementoService.findById(id), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/elemento", method = RequestMethod.GET)
	public ResponseEntity<Elemento> getElementoByName(@RequestParam(value = "nome") String search) { 
		return new ResponseEntity<Elemento>(elementoService.findOneByName(search), HttpStatus.OK);
	}
	
	@GetMapping("/elemento/componente")
	public ResponseEntity<Componente> getComponenteByName(@RequestParam(value = "nome") String name) { 
		return new ResponseEntity<Componente>(elementoService.findOneComponenteByName(name), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/all_componente", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<Componente>> getAllComponentes() { 
		return new ResponseEntity<ArrayList<Componente>>((ArrayList<Componente>) elementoService.findAllComponente(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/elemento/comportamento", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Elemento> editaComportamento(@RequestBody ElementoDTO elemento) {
		String elementoName = elemento.getNome();
		if (elemento.getComplemento() != null) {
			elementoName += elemento.getComplemento();
		}
		if (!elementoService.elementoInDataBase(elementoName)) {
			return new ResponseEntity<>(HttpStatus.MULTIPLE_CHOICES);
		}
		
		return new ResponseEntity<>(elementoService.update(elemento), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/all_valNutri", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<ValorNutricional>> getAllValNutri() { 
		return new ResponseEntity<ArrayList<ValorNutricional>>((ArrayList<ValorNutricional>) elementoService.findAllValNutri(), HttpStatus.OK);
	}
}
