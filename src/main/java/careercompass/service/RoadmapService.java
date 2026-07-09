package careercompass.service;

import careercompass.model.Roadmap;
import careercompass.repository.RoadmapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoadmapService {

    @Autowired
    private RoadmapRepository roadmapRepository;

    // =========================
    // CRUD METHODS
    // =========================

    public Roadmap saveRoadmap(Roadmap roadmap) {
        return roadmapRepository.save(roadmap);
    }

    public List<Roadmap> getAllRoadmaps() {
        return roadmapRepository.findAll();
    }

    public void deleteRoadmap(Long id) {
        roadmapRepository.deleteById(id);
    }

    public Roadmap updateRoadmap(Long id, Roadmap updatedRoadmap) {

        Roadmap roadmap = roadmapRepository.findById(id).orElse(null);

        if (roadmap != null) {

            roadmap.setGoal(updatedRoadmap.getGoal());
            roadmap.setCurrentSkill(updatedRoadmap.getCurrentSkill());

            return roadmapRepository.save(roadmap);
        }

        return null;
    }

    // =========================
    // ROADMAP GENERATOR
    // =========================

    public List<String> generateRoadmap(String goal) {

        if (goal.equalsIgnoreCase("Backend Developer")) {
            return List.of(
                    "Learn Java",
                    "Learn OOP",
                    "Learn Collections",
                    "Learn JDBC",
                    "Learn Spring Boot",
                    "Learn MySQL",
                    "Build Backend Projects",
                    "Learn Deployment"
            );
        }

        if (goal.equalsIgnoreCase("Frontend Developer")) {
            return List.of(
                    "Learn HTML",
                    "Learn CSS",
                    "Learn JavaScript",
                    "Learn Responsive Design",
                    "Learn React",
                    "Work with APIs",
                    "Build Frontend Projects",
                    "Deploy Projects"
            );
        }

        if (goal.equalsIgnoreCase("Full Stack Developer")) {
            return List.of(
                    "Learn HTML/CSS/JS",
                    "Learn React",
                    "Learn Java",
                    "Learn Spring Boot",
                    "Learn MySQL",
                    "Build Full Stack Projects",
                    "Learn Git & GitHub",
                    "Deploy Applications"
            );
        }

        if (goal.equalsIgnoreCase("Data Analyst")) {
            return List.of(
                    "Learn Excel",
                    "Learn SQL",
                    "Learn Python",
                    "Learn Pandas",
                    "Learn Data Visualization",
                    "Learn Power BI",
                    "Analyze Datasets",
                    "Build Portfolio Projects"
            );
        }

        return List.of("Goal not supported yet");
    }
}