package careercompass.controller;

import careercompass.model.RoadmapRequest;
import careercompass.service.RoadmapService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roadmap")
public class RoadmapController {

    private final RoadmapService roadmapService;

    public RoadmapController(RoadmapService roadmapService) {
        this.roadmapService = roadmapService;
    }

    @GetMapping
    public String test() {
        return "Roadmap Controller Working!";
    }

    @PostMapping
    public List<String> generateRoadmap(@RequestBody RoadmapRequest request) {
        return roadmapService.generateRoadmap(request.getGoal());
    }
}