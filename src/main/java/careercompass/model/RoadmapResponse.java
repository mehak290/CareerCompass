package careercompass.model;

import java.util.List;

public class RoadmapResponse {

    private String goal;
    private String duration;
    private List<String> roadmap;

    public RoadmapResponse() {
    }

    public RoadmapResponse(String goal, String duration, List<String> roadmap) {
        this.goal = goal;
        this.duration = duration;
        this.roadmap = roadmap;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public List<String> getRoadmap() {
        return roadmap;
    }

    public void setRoadmap(List<String> roadmap) {
        this.roadmap = roadmap;
    }
}