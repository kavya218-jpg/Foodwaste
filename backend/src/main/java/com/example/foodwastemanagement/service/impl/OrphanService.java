package com.example.foodwastemanagement.service.impl;

import com.example.foodwastemanagement.Model.Orphan;
import com.example.foodwastemanagement.Repository.IOrphanRepository;
import com.example.foodwastemanagement.service.IOrphanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrphanService implements IOrphanService {

    @Autowired
    private IOrphanRepository orphanRepository;

    @Override
    public Orphan addOrphan(Orphan orphan) {
        return orphanRepository.save(orphan);
    }

    @Override
    public List<Orphan> getOrphan() {
        return orphanRepository.findAll();
    }

    @Override
    public Orphan getOrphanById(Long id) {
        return orphanRepository.findById(id).get();
    }

    @Override
    public Orphan updateOrphan(Orphan orphan) {
        return orphanRepository.save(orphan);
    }


    @Override
    public void deleteOrphanById(Long id) {
        orphanRepository.deleteById(id);
    }

    @Override
    public Orphan getByEmailAndPassword(String email, String password) {
        return orphanRepository.findByEmailAndPassword(email,password);
    }

    @Override
    public Orphan getByUsername(String username) {
        return orphanRepository.findByUsername(username);
    }
}
