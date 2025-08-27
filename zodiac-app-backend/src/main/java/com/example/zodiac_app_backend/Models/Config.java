package com.example.zodiac_app_backend.Models;

public class Config {

    private final String observationPoint = "topocentric";
    private final String ayanamsha = "tropical";
    private final String language = "en";

    public String getObservationPoint() {
        return observationPoint;
    }

    public String getAyanamsha() {
        return ayanamsha;
    }

    public String getLanguage() {
        return language;
    }
}
