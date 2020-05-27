package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.jwt.JWT_TOKEN_PROVIDER;
import com.dontfeed.Dont.Feed.model.User;
import com.dontfeed.Dont.Feed.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;import java.security.Principal;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = UserController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    protected static final String PATH = "/api/user";
    private final JWT_TOKEN_PROVIDER tokenProvider;
    private final UserService userService;

    // full path is "/api/users"
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userService.findAllUsers();
        if (users == null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Something went wrong when attempting to achieve all users");
        }
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(users);
    }

    @GetMapping("/count")
    public ResponseEntity<?> getNumberOfUsers() {
        Long count = userService.numberOfUsers();
        if (count == null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Number of Users returns null");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(count);
    }

    @GetMapping("/login")
    public ResponseEntity<?> getUser(Principal principal) {
        //principal = httpServletRequest.getUserPrincipal.
        if (principal == null) {
            //logout will also use here so we should return ok http status.
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) principal;
        User user = userService.findByUsername(authenticationToken.getName());
        user.setToken(tokenProvider.generateToken(authenticationToken));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(user);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()) != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Username Already Exists");
        }
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userService.saveUser(user));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User returnedUser = userService.updateUser(user);
        if ( returnedUser == null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("User does not exist. Check you facts.");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(returnedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser (@PathVariable Long id) {
        if (userService.findById(id) == null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("User does not exist at that id");
        }
        userService.deleteUser(id);
        if (userService.findById(id) != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("User was not successfully deleted");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("User Successfully Deleted");
    }
}
