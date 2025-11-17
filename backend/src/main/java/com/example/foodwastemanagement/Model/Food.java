package com.example.foodwastemanagement.Model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodType;

    private String foodAmount;

    private String location;

    @Column(columnDefinition = "longtext")
    private String file="";

    private String orphan;

    private String time;

    private String donorName;

    private String reply;


}
