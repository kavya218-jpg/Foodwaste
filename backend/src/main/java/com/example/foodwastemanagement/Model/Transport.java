package com.example.foodwastemanagement.Model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Transport {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleType;

    private String vehicleNumber;

    private String location;


    @Lob  @Column(columnDefinition = "MEDIUMBLOB")
    private String file="";
}
