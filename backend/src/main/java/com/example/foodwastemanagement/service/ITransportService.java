package com.example.foodwastemanagement.service;


import com.example.foodwastemanagement.Model.Transport;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ITransportService {

    Transport addTransport(Transport transport, MultipartFile file);

    List<Transport> getTransport();

    Transport getTransportById(Long id);

    Transport updateTransport(Transport transport);

    void deleteTransport(Long id);


}
