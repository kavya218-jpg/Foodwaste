package com.example.foodwastemanagement.service;

import com.example.foodwastemanagement.Model.Food;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IFoodService {

    Food addFood(Food food, MultipartFile file);

    List<Food> getFoods();

    Food getFoodById(Long id);

    Food updateFoodById(Food food);

    void deleteFoodById(Long id);
}
