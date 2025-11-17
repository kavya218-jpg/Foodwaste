package com.example.foodwastemanagement.controller;


import com.example.foodwastemanagement.Model.Food;
import com.example.foodwastemanagement.Model.Orphan;
import com.example.foodwastemanagement.service.IFoodService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin(origins = "*")
public class FoodController {

    @Autowired
    private IFoodService foodService;

   //ENDPOINT FOR ADDING THE FOOD
    @PostMapping("/food")
    private ResponseEntity<?> addFood(@RequestParam("image")MultipartFile file,Food food)
    {
        try
        {
            String filename=file.getOriginalFilename();
            String filePath= Paths.get("").toAbsolutePath().toString();
            Path actualFilePath=Paths.get(filePath,"src","main","resources","static","images",file.getOriginalFilename());

            file.transferTo(actualFilePath);

            Food foo=Food.builder()
                    .foodType(food.getFoodType())
                    .foodAmount(food.getFoodAmount())
                    .location(food.getLocation())
                    .orphan(food.getOrphan())
                    .file(filename)
                    .time(food.getTime())
                    .donorName(food.getDonorName())
                    .build();

            return new ResponseEntity<>(foodService.addFood(foo,file), HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING ALL THE FOODS
    @GetMapping("/food")
    private ResponseEntity<?> getFood()
    {
        try
        {
            return new ResponseEntity<>(foodService.getFoods(),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING THE FOOD BY ID
    @GetMapping("/food/{id}")
    private ResponseEntity<?> getFoodById(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(foodService.getFoodById(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
           return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR UPDATING THE FOOD
    @PutMapping("/food")
    private ResponseEntity<?> updateFood(@PathVariable Food food)
    {
        try
        {
            return new ResponseEntity<>(foodService.updateFoodById(food),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR DELETING THE FOOD BY ID
    @DeleteMapping("/food/{id}")
    private ResponseEntity<?> deleteFoodById(@PathVariable Long id)
    {
        try
        {
            foodService.deleteFoodById(id);
            return new ResponseEntity<>("deleted successfully",HttpStatus.OK);
        }
        catch(Exception e)
        {
             return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/food/{id}/{reply}")
    private ResponseEntity<?> orphanReply(@PathVariable Long id,@PathVariable String reply)
    {
        try
        {
            Food f=foodService.getFoodById(id);
            f.setReply(reply);
            foodService.updateFoodById(f);
            return new ResponseEntity<>(f,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
