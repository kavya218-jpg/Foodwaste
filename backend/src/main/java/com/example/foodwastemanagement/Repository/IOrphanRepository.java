package com.example.foodwastemanagement.Repository;

import com.example.foodwastemanagement.Model.Orphan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IOrphanRepository extends JpaRepository<Orphan,Long> {
    Orphan findByEmailAndPassword(String email, String password);

    Orphan findByUsername(String username);
}
