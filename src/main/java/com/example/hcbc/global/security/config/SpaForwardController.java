package com.example.hcbc.global.security.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaForwardController {

    @RequestMapping({
            "/signup",
            "/signin",
            "/login",
            "/main",
            "/profile",
            "/chat",
            "/chat/**",
            "/room/**"
    })
    public String forwardSpaRoutes() {
        return "forward:/index.html";
    }
}
