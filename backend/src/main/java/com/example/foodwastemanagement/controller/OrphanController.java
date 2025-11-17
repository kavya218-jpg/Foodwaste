package com.example.foodwastemanagement.controller;

import com.example.foodwastemanagement.Dto.Reply;
import com.example.foodwastemanagement.Model.Food;
import com.example.foodwastemanagement.Model.Orphan;
import com.example.foodwastemanagement.service.IFoodService;
import com.example.foodwastemanagement.service.IOrphanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class OrphanController {

    @Autowired
    private IOrphanService orphanService;

    //ENDPOINT FOR ADDING THE ORPHAN
    @PostMapping("/orphan")
    private ResponseEntity<?> addOrphan(@RequestBody Orphan orphan)
    {
        try
        {
            if(orphanService.getByEmailAndPassword(orphan.getEmail(),orphan.getPassword())== null) {
            return new ResponseEntity<>(orphanService.addOrphan(orphan), HttpStatus.OK);
            }
            return new ResponseEntity<>("already registered",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    //ENDPOINT FOR GETTING ALL THE ORPHAN
    @GetMapping("/orphan")
    private ResponseEntity<?> getOrphan()
    {
        try
        {
                return new ResponseEntity<>(orphanService.getOrphan(), HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR GETTING THE ORPHAN BY ID
    @GetMapping("/orphan/{id}")
    private ResponseEntity<?> getOrphanById(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(orphanService.getOrphanById(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR UPDATING THE ORPHAN
    @PutMapping("/orphan")
    private ResponseEntity<?> updateOrphan(@PathVariable Orphan orphan)
    {
        try
        {
            return new ResponseEntity<>(orphanService.updateOrphan(orphan),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR DELETING THE ORPHAN BY ID
    @DeleteMapping("/orphan/{id}")
    private ResponseEntity<?> deleteOrphanById(@PathVariable Long id)
    {
        try
        {
            orphanService.deleteOrphanById(id);
            return new ResponseEntity<>("deleted successfully",HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/orphan/{username}/{feedback}")
    private ResponseEntity<?> sendFeedback(@PathVariable String username,@PathVariable String feedback)
    {
        try
        {
            Orphan orphan= orphanService.getByUsername(username);
            orphan.setFeedback(feedback);
            orphanService.updateOrphan(orphan);
            return new ResponseEntity<>(orphan,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
