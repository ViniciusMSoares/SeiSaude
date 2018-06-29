package server.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.entities.Indicacao;
import server.entities.DTOs.IndicacaoDTO;
import server.repositories.IndicacaoRepository;
import server.servicies.IndicacaoService;

@Service
public class IndicacaoServiceImpl implements IndicacaoService{

	@Autowired
	private IndicacaoRepository indicacaoRepository;
	
	@Override
	public Indicacao findById(Long id) {
		return indicacaoRepository.getOne(id);
	}

	@Override
	public Indicacao save(IndicacaoDTO indicacaoDTO) {
		Indicacao indicacao = new Indicacao(indicacaoDTO.getDosagem(), indicacaoDTO.getEfeito(), indicacaoDTO.getTipo(), indicacaoDTO.getUnidade(),
				indicacaoDTO.getId_elemento(), indicacaoDTO.getId_situacao(), indicacaoDTO.getId_tipoPessoa());
		return indicacaoRepository.save(indicacao);
	}

	@Override
	public void delete(Long id) {
		indicacaoRepository.deleteById(id);
	}

}
