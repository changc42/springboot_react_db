package com.example.shopping.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserDataSeed implements CommandLineRunner {

    @Autowired
    UserRepository userRepository;

    @Override
    public void run(String[] args) throws Exception{
        loadUserData();
    }

    private void loadUserData(){
        if(userRepository.count() == 0){
            User user1 = new User("John Bill", "john@john.com", "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=");
            User user2 = new User("Mary Jane", "mary@jane.com", "https://i.insider.com/5cb8b133b8342c1b45130629?width=700");
            userRepository.save(user1);
            userRepository.save(user2);
        }
        System.out.println("data seeded");
    }

}
