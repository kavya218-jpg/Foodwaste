package com.example.foodwastemanagement.service;

import com.example.foodwastemanagement.Model.User;

import java.util.List;

public interface IUserService {

    User addUser(User user);

    List<User> getUsers();

    User getUserById(Long id);

    User updateUser(User user);

    void deleteUserById(Long id);

    User findByEmailAndPassword(String email,String password);

}
