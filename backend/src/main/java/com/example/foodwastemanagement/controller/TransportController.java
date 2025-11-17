package com.example.foodwastemanagement.controller;


import com.example.foodwastemanagement.Model.Food;
import com.example.foodwastemanagement.Model.Orphan;
import com.example.foodwastemanagement.Model.Transport;
import com.example.foodwastemanagement.service.IOrphanService;
import com.example.foodwastemanagement.service.ITransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin(origins = "*")
public class TransportController {

    @Autowired
    private ITransportService transportService;

    //ENDPOINT FOR ADDING THE TRANSPORT
    @PostMapping("/transport")
    private ResponseEntity<?> addTransport(@RequestParam("image") MultipartFile file, Transport transport)
    {
        try
        {
            String filename=file.getOriginalFilename();
            String filePath= Paths.get("").toAbsolutePath().toString();
            Path actualFilePath=Paths.get(filePath,"src","main","resources","static","images",file.getOriginalFilename());

            file.transferTo(actualFilePath);

            Transport trans=Transport.builder()
                    .vehicleType(transport.getVehicleType())
                    .vehicleNumber(transport.getVehicleNumber())
                    .location(transport.getLocation())
                    .file(file.getOriginalFilename())
                    .build();

            return new ResponseEntity<>(transportService.addTransport(trans,file), HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING ALL THE ORPHAN
    @GetMapping("/transport")
    private ResponseEntity<?> getTransport()
    {
        try
        {
            return new ResponseEntity<>(transportService.getTransport(),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //ENDPOINT FOR GETTING THE TRANSPORT BY ID
    @GetMapping("/transport/{id}")
    private ResponseEntity<?> getTransportById(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(transportService.getTransportById(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR UPDATING THE TRANSPORT
    @PutMapping("/transport")
    private ResponseEntity<?> updateTransport(@RequestBody Transport transport)
    {
        try
        {
            return new ResponseEntity<>(transportService.updateTransport(transport),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //ENDPOINT FOR DELETING THE ORPHAN BY ID
    @DeleteMapping("/transport/{id}")
    private ResponseEntity<?> deleteTransportById(@PathVariable Long id)
    {
        try
        {
            transportService.deleteTransport(id);
            return new ResponseEntity<>("deleted successfully",HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
