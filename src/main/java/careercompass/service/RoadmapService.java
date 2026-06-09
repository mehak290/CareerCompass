package careercompass.service;

import careercompass.model.Roadmap;
import careercompass.repository.RoadmapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoadmapService {

    @Autowired
    private RoadmapRepository roadmapRepository;

    public void saveRoadmap(String goal, String currentSkill) {

        Roadmap roadmap = new Roadmap();

        roadmap.setGoal(goal);
        roadmap.setCurrentSkill(currentSkill);

        roadmapRepository.save(roadmap);
    }
}