package careercompass.service;

import careercompass.model.User;
import careercompass.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already exists!");
        }

        return userRepository.save(user);
    }

    // Login User
    public User loginUser(String email, String password) {

        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }

        throw new RuntimeException("Invalid email or password!");
    }

    // Get All Users
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

}