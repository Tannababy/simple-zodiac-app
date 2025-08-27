package com.example.zodiac_app_backend.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class AstrologyController {

    @PatchMapping
    public String getHoroscope() {

    }
}
