package careercompass.controller;

import careercompass.model.Roadmap;
import careercompass.repository.RoadmapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import careercompass.service.RoadmapService;


@RestController
@RequestMapping("/roadmap")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;

    @Autowired
    private RoadmapRepository roadmapRepository;

    @GetMapping
    public String test() {
        return "Roadmap API Working!";
    }

    @PostMapping
    public String saveRoadmap(@RequestBody Roadmap roadmap) {
        roadmapRepository.save(roadmap);
        return "Roadmap Saved Successfully!";
    }

    @GetMapping("/all")
    public List<Roadmap> getAllRoadmaps() {
        return roadmapRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteRoadmap(@PathVariable Long id) {
        roadmapRepository.deleteById(id);
        return "Roadmap Deleted!";
    }

    @PutMapping("/{id}")
    public Roadmap updateRoadmap(@PathVariable Long id, @RequestBody Roadmap updatedRoadmap) {
        Roadmap roadmap = roadmapRepository.findById(id).orElse(null);
    if(roadmap!=null) {
        roadmap.setGoal(updatedRoadmap.getGoal());
        roadmap.setCurrentSkill(updatedRoadmap.getCurrentSkill());

        return roadmapRepository.save(roadmap);
    }
    return null;
    }

    @PostMapping("/generate")
    public List<String> generateRoadmap(@RequestBody Roadmap roadmap) {
        return roadmapService.generateRoadmap(roadmap.getGoal());
    }

    }

