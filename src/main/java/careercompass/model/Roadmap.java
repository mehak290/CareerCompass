package careercompass.model;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.persistence.*;

@Entity
@Table(name = "roadmaps")
public class Roadmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Goal cannot be empty")
    @Size(min = 3, max = 50, message = "Goal must be between 3 and 50 characters")
    private String goal;

    @NotBlank(message = "Current Skill cannot be empty")
    @Size(min = 2, max = 50, message = "Current Skill must be between 2 and 50 characters")
    private String currentSkill;

    // Progress in percentage (0-100)
    private int progress;

    // Number of completed roadmap steps
    private int completedSteps;

    // Total number of roadmap steps
    private int totalSteps;

    public Roadmap() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getCurrentSkill() {
        return currentSkill;
    }

    public void setCurrentSkill(String currentSkill) {
        this.currentSkill = currentSkill;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

    public int getCompletedSteps() {
        return completedSteps;
    }

    public void setCompletedSteps(int completedSteps) {
        this.completedSteps = completedSteps;
    }

    public int getTotalSteps() {
        return totalSteps;
    }

    public void setTotalSteps(int totalSteps) {
        this.totalSteps = totalSteps;
    }
}