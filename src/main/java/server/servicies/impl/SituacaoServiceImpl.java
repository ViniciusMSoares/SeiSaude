package server.servicies.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Doenca;
import server.entities.Sintoma;
import server.entities.SintomaDoenca;
import server.entities.Situacao;
import server.entities.DTOs.DoencaDTO;
import server.entities.DTOs.SituacaoDTO;
import server.repositories.DoencaRepository;
import server.repositories.SintomaDoencaRepository;
import server.repositories.SintomaRepository;
import server.repositories.SituacaoRepository;
import server.servicies.SituacaoService;

@Service
public class SituacaoServiceImpl implements SituacaoService{

	@Autowired
	private SituacaoRepository situacaoRepository;

	@Autowired
	private SintomaRepository sintomaRepository;
	
	@Autowired
	private DoencaRepository doencaRepository;
	
	@Autowired
	private SintomaDoencaRepository sintomaDoencaRepository;

	@Override
	public Situacao findById(Long id) {
		return situacaoRepository.getOne(id);
	}

	@Override
	public Situacao save(SituacaoDTO situacaoDTO) {
		Situacao situacao = new Situacao(situacaoDTO.getName(), situacaoDTO.getDescricao());
		Sintoma sintoma = new Sintoma(situacao);
		
		return sintomaRepository.save(sintoma);
	}

	
	@Override
	public Doenca save(DoencaDTO doencaDTO) {
		Situacao situacao = new Situacao(doencaDTO.getName(), doencaDTO.getDescricao());
		Doenca doenca = new Doenca(situacao);
		doencaRepository.save(doenca);
		
		for (int i = 0; i < doencaDTO.getNomesSintomas().length; i++) {
			ArrayList<Situacao> sintomas = findByName(doencaDTO.getNomesSintomas()[i]);
			SintomaDoenca sintomaDoenca;
			if (sintomas.size() == 0) {//cria novo sintoma caso não encontre um
				Sintoma sintoma = new Sintoma(doencaDTO.getNomesSintomas()[0], "Este sintoma ainda não possui uma descrição");
				sintomaRepository.save(sintoma);
				sintomaDoenca = new SintomaDoenca(sintoma.getId(), doenca.getId());
			}else {
				sintomaDoenca = new SintomaDoenca(sintomas.get(0).getId(), doenca.getId());
			}
			
			sintomaDoencaRepository.save(sintomaDoenca);
		}
		
		return doencaRepository.save(doenca);
	}

	@Override
	public void delete(Long id) {
		situacaoRepository.deleteById(id);
	}

	@Override
	public ArrayList<Situacao> findByName(String name) {
		ArrayList<Situacao> result = new ArrayList<>();
		name = name.toLowerCase();

		for (Situacao situacao : situacaoRepository.findAll()) {
			String situacaoName = situacao.getName().toLowerCase();
			if (situacaoName.equals(name) || situacaoName.contains(name)) {
				result.add(situacao);
			}
		}
		return result;
	}
	
	public boolean situacaoInDataBase(String nome) {
		nome = nome.toLowerCase();
		
		for (Situacao situacao : situacaoRepository.findAll()) {
			String situacaoName = situacao.getName().toLowerCase();
			if (situacaoName.equals(nome)) {
				return true;
			}
		}
		
		return false;
	}
	
}
