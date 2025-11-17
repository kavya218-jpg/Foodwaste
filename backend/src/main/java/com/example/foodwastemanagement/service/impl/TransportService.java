package com.example.foodwastemanagement.service.impl;

import com.example.foodwastemanagement.Model.Transport;
import com.example.foodwastemanagement.Repository.ITransportRepository;
import com.example.foodwastemanagement.service.ITransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service
public class TransportService implements ITransportService {


    @Autowired
    private ITransportRepository transportRepository;

    @Override
    public Transport addTransport(Transport transport, MultipartFile file) {
        return transportRepository.save(transport);
    }

    @Override
    public List<Transport> getTransport() {
        return transportRepository.findAll();
    }


    @Override
    public Transport getTransportById(Long id) {
        return transportRepository.findById(id).get();
    }

    @Override
    public Transport updateTransport(Transport transport) {
        return transportRepository.save(transport);
    }


    @Override
    public void deleteTransport(Long id) {
         transportRepository.deleteById(id);
    }
}

