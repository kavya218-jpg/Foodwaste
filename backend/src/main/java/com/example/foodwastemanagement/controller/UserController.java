package com.example.foodwastemanagement.controller;


import com.example.foodwastemanagement.Model.Transport;
import com.example.foodwastemanagement.Model.User;
import com.example.foodwastemanagement.service.ITransportService;
import com.example.foodwastemanagement.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class UserController {


    @Autowired
    private IUserService userService;

    //ENDPOINT FOR ADDING THE USER
    @PostMapping("/user")
    private ResponseEntity<?> addUser(@RequestBody User user)
    {
        try
        {
            if(userService.findByEmailAndPassword(user.getEmail(),user.getPassword()) ==null ) {
                return new ResponseEntity<>(userService.addUser(user), HttpStatus.OK);
            }
            return new ResponseEntity<>("already registered",HttpStatus.INTERNAL_SERVER_ERROR);

        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING ALL THE USER
    @GetMapping("/user")
    private ResponseEntity<?> getUser()
    {
        try
        {
            return new ResponseEntity<>(userService.getUsers(),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING THE USER BY ID
    @GetMapping("/user/{id}")
    private ResponseEntity<?> getUserById(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR UPDATING THE USER
    @PutMapping("/user")
    private ResponseEntity<?> updateUser(@RequestBody User user)
    {
        try
        {
            return new ResponseEntity<>(userService.updateUser(user),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR DELETING THE USER BY ID
    @DeleteMapping("/user/{id}")
    private ResponseEntity<?> deleteUserById(@PathVariable Long id)
    {
        try
        {
            userService.deleteUserById(id);
            return new ResponseEntity<>("deleted successfully",HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
