package com.christian.movies.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins = "*")
@RestController
public class MyErrorController implements ErrorController  {
 
	@GetMapping("/error")
    public String handleError() {
        return "<!DOCTYPE html>\r\n" + 
        		"<html>\r\n" + 
        		"<body>\r\n" + 
        		"<h1>Something went wrong! </h1>\r\n" + 
        		"<h2>Our Engineer is on it, meanwhile, try to go to another route, maybe this is not implemented yet</h2>\r\n" + 
        		"</body>\r\n" + 
        		"</html>";
    }
 
    @Override
    public String getErrorPath() {
        return "/error";
    }
}
