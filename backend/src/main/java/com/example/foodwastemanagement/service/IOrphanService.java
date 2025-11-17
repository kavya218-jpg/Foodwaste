package com.example.foodwastemanagement.service;

import com.example.foodwastemanagement.Model.Orphan;

import java.util.List;

public interface IOrphanService {

    Orphan addOrphan(Orphan orphan);

    List<Orphan> getOrphan();

    Orphan getOrphanById(Long id);

    Orphan updateOrphan(Orphan orphan);

    void deleteOrphanById(Long id);

    Orphan getByEmailAndPassword(String email,String password);

    Orphan getByUsername(String username);
}
