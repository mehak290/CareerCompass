package careercompass.controller;

import careercompass.model.Roadmap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import careercompass.service.RoadmapService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/roadmap")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;



    @GetMapping
    public String test() {
        return "Roadmap API Working!";
    }

    @PostMapping
    public Roadmap saveRoadmap(@Valid @RequestBody Roadmap roadmap) {
        return roadmapService.saveRoadmap(roadmap);
    }

    @GetMapping("/all")
    public List<Roadmap> getAllRoadmaps() {
        return roadmapService.getAllRoadmaps();
    }

    @DeleteMapping("/{id}")
    public String deleteRoadmap(@PathVariable Long id) {
        roadmapService.deleteRoadmap(id);
        return "Roadmap Deleted!";
    }

    @PutMapping("/{id}")
    public Roadmap updateRoadmap(@PathVariable Long id,
                                 @RequestBody Roadmap updatedRoadmap) {

        return roadmapService.updateRoadmap(id, updatedRoadmap);
    }

    @PostMapping("/generate")
    public List<String> generateRoadmap(@RequestBody Roadmap roadmap) {
        return roadmapService.generateRoadmap(roadmap.getGoal());
    }

    }

