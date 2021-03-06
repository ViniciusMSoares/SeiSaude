package server.servicies.impl;

import java.util.ArrayList;
import java.util.List;

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
		Situacao situacao = new Situacao(situacaoDTO.getNome(), situacaoDTO.getDescricao(), situacaoDTO.getComplemento(), situacaoDTO.getCadastradoPor());
		Sintoma sintoma = new Sintoma(situacao);
		
		return sintomaRepository.save(sintoma);
	}

	
	@Override
	public Doenca save(DoencaDTO doencaDTO) {
		Situacao situacao = new Situacao(doencaDTO.getNome(), doencaDTO.getDescricao(), doencaDTO.getComplemento(), doencaDTO.getCadastradoPor());
		Doenca doenca = new Doenca(situacao);
		doencaRepository.save(doenca);
		
		if (doencaDTO.getNomesSintomas() != null) {
			for (int i = 0; i < doencaDTO.getNomesSintomas().length; i++) {
				ArrayList<Situacao> sintomas = findByName(doencaDTO.getNomesSintomas()[i]);
				SintomaDoenca sintomaDoenca;
				if (sintomas.size() == 0) {//cria novo sintoma caso não encontre um
					String descSintoma = doencaDTO.getDescSintomas()[i];
					if (descSintoma.equals("")) {//checa se a descrição do sintoma foi passado no cadastro - acho que pode tirar
						descSintoma = "Este sintoma ainda não possui uma descrição";
					}
					Sintoma sintoma = new Sintoma(doencaDTO.getNomesSintomas()[i], descSintoma, "", "");//falta receber complemento e cadastradoPor
					sintomaRepository.save(sintoma);
					sintomaDoenca = new SintomaDoenca(sintoma.getId(), doenca.getId());
				}else {
					sintomaDoenca = new SintomaDoenca(sintomas.get(0).getId(), doenca.getId());
				}
				
				sintomaDoencaRepository.save(sintomaDoenca);
			}
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
		name = name.toLowerCase().replaceAll("\\s", "");

		for (Situacao situacao : situacaoRepository.findAll()) {
			if (situacao.getComplemento() == null) {
				situacao.setComplemento("");
			}
			String situacaoName = (situacao.getNome() + situacao.getComplemento()).toLowerCase().replaceAll("\\s", "");
			if (situacaoName.equals(name) || situacaoName.contains(name)) {
				result.add(situacao);
			}
		}
		return result;
	}
	
	public boolean situacaoInDataBase(String nome) {
		nome = nome.toLowerCase().replaceAll("\\s", "");
		
		for (Situacao situacao : situacaoRepository.findAll()) {
			String situacaoName = situacao.getNome().toLowerCase();
			if (situacao.getComplemento() != null) {
				situacaoName += situacao.getComplemento().toLowerCase();
			}
			situacaoName = situacaoName.replaceAll("\\s", "");
			if (situacaoName.equals(nome)) {
				return true;
			}
		}
		
		return false;
	}
	
	public boolean doencaInDataBase(String nome) {
		nome = nome.toLowerCase().replaceAll("\\s", "");
		
		for (Doenca doenca : doencaRepository.findAll()) {
			String doencaName = doenca.getNome().toLowerCase();
			if (doenca.getComplemento() != null) {
				doencaName += doenca.getComplemento().toLowerCase();
			}
			doencaName = doencaName.replaceAll("\\s", "");
			if (doencaName.equals(nome)) {
				return true;
			}
		}
		
		return false;
	}

	@Override
	public ArrayList<Sintoma> findAllSintoma() {
		ArrayList<Sintoma> sintomas = (ArrayList<Sintoma>) sintomaRepository.findAll();
		ArrayList<Long> ids = new ArrayList<Long>();
		ArrayList<Situacao> situacoes = (ArrayList<Situacao>) situacaoRepository.findAll();
		for (Situacao situacao : situacoes) {
			if (ids.contains(situacao.getId())) {
				sintomas.add((Sintoma) situacao);
				System.out.println(situacao.getNome());
			}
		}
		
		return sintomas;
	}

	@Override
	public Situacao findOneByName(String name) {
		name = name.toLowerCase();

		for (Situacao situacao : situacaoRepository.findAll()) {
			if (situacao.getComplemento() == null) {
				situacao.setComplemento("");
			}
			String situacaoName = (situacao.getNome() + situacao.getComplemento()).toLowerCase();
			if (situacaoName.equals(name)) {
				return situacao;
			}
		}
		return null;
	}

	@Override
	public List<Situacao> findAllSituacao() {
		return situacaoRepository.findAll();
	}
	
}
