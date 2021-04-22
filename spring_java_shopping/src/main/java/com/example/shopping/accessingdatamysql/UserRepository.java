package com.example.shopping.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;

import com.example.shopping.accessingdatamysql.User;
import org.springframework.web.bind.annotation.CrossOrigin;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@CrossOrigin
public interface UserRepository extends CrudRepository<User, Integer> {

}