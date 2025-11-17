package com.example.foodwastemanagement.Repository;

import com.example.foodwastemanagement.Model.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ITransportRepository extends JpaRepository<Transport,Long> {
}
