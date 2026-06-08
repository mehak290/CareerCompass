package careercompass.service;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoadmapService
{

    public List<String> generateRoadmap(String goal) {

        if (goal.equalsIgnoreCase("Backend Developer")) {

            return List.of(
                    "Learn OOP",
                    "Learn Collections",
                    "Learn JDBC",
                    "Learn Spring Boot",
                    "Learn MySQL",
                    "Build Projects",
                    "Learn Deployement"
            );
        }

        return List.of("Goal not supported yet");
    }
    }
