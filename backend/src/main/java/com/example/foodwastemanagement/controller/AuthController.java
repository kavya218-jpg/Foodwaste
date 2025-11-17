package com.example.foodwastemanagement.controller;


import com.example.foodwastemanagement.Dto.Login;
import com.example.foodwastemanagement.Model.Orphan;
import com.example.foodwastemanagement.Model.User;
import com.example.foodwastemanagement.Repository.IOrphanRepository;
import com.example.foodwastemanagement.service.IOrphanService;
import com.example.foodwastemanagement.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {


    @Autowired
    private IUserService userService;


    @Autowired
    private IOrphanService orphanService;


    @PostMapping("/adminlogin")
    private ResponseEntity<?> adminLogin(@RequestBody Login l)
    {
        try
        {
            if(l.getEmail().equals("admin@gmail.com") && l.getPassword().equals("admin"));
            return new ResponseEntity<>(l, HttpStatus.OK);
        }
        catch(Exception e)
        {
              return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/userlogin")
    private ResponseEntity<?> userLogin(@RequestBody Login l)
    {
        try
        {
            User u=userService.findByEmailAndPassword(l.getEmail(),l.getPassword());
             if(userService.findByEmailAndPassword(l.getEmail(),l.getPassword())!=null)
             {
                 return new ResponseEntity<>(u,HttpStatus.OK);
             }
             return new ResponseEntity<>("invalid credentials",HttpStatus.BAD_REQUEST);
        }
        catch(Exception e)
        {
              return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/orphanlogin")
    private ResponseEntity<?> orphanLogin(@RequestBody Login l)
    {
        try
        {
            Orphan or=orphanService.getByEmailAndPassword(l.getEmail(),l.getPassword());
            if(orphanService.getByEmailAndPassword(l.getEmail(),l.getPassword())!=null)
            {
                return new ResponseEntity<>(or,HttpStatus.OK);
            }
            return new ResponseEntity<>("invalid credentials",HttpStatus.BAD_REQUEST);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/transportlogin")
    private ResponseEntity<?> transportLogin(@RequestBody Login l)
    {
        try
        {
            if(l.getEmail().equals("transport@gmail.com") && l.getPassword().equals("transport"));
            return new ResponseEntity<>(l, HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/compostlogin")
    private ResponseEntity<?> compostLogin(@RequestBody Login l)
    {
        try
        {
            if(l.getEmail().equals("compost@gmail.com") && l.getPassword().equals("compost"));
            return new ResponseEntity<>(l, HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}

