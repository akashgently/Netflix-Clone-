package com.springjwt.services.auth;

import com.springjwt.dto.SignupDTO;
import com.springjwt.dto.UserDTO;
import com.springjwt.dto.UsersDTO;
import com.springjwt.entities.User;

public interface AuthService<S extends User> {
    UserDTO createUser(SignupDTO signupDTO);

    Boolean emailExists(String email);

//    User createUser(User user);

//    S createUserFromDTO(UsersDTO usersDTO);
}
