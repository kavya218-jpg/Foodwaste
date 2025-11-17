package com.example.foodwastemanagement.service.impl;

import com.example.foodwastemanagement.Model.Food;
import com.example.foodwastemanagement.Repository.IFoodRepository;
import com.example.foodwastemanagement.service.IFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service
public class FoodService implements IFoodService {

    @Autowired
    private IFoodRepository foodRepository;
    @Override
    public Food addFood(Food food, MultipartFile file) {
        return foodRepository.save(food);
    }

    @Override
    public List<Food> getFoods() {
        return foodRepository.findAll();
    }

    @Override
    public Food getFoodById(Long id) {
        return foodRepository.findById(id).get();
    }

    @Override
    public Food updateFoodById(Food food) {
        return foodRepository.save(food);

    }

    @Override
    public void deleteFoodById(Long id) {
         foodRepository.deleteById(id);
    }
}
