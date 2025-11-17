package com.example.foodwastemanagement.Repository;

import com.example.foodwastemanagement.Model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IFoodRepository extends JpaRepository<Food,Long> {


}
