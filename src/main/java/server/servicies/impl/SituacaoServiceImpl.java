package server.servicies.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Doenca;
import server.entities.Sintoma;
import server.entities.Situacao;
import server.entities.DTOs.SituacaoDTO;
import server.repositories.DoencaRepository;
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

	@Override
	public Situacao findById(Long id) {
		return situacaoRepository.getOne(id);
	}

	@Override
	public Situacao save(SituacaoDTO situacaoDTO) {
		Situacao situacao = new Situacao(situacaoDTO.getName(), situacaoDTO.getDescricao());
		
		switch (situacaoDTO.getTipo()) {
		case 1:
			Sintoma sintoma = new Sintoma(situacao);
			
			return sintomaRepository.save(sintoma);
		case 2:
			Doenca doenca = new Doenca(situacao);
			
			return doencaRepository.save(doenca);
			
		default:
			return situacaoRepository.save(situacao);
		}
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
	
}
