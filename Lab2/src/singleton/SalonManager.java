package singleton;

public class SalonManager {
    // Step 1: Create a private static instance of the same class
    private static SalonManager instance;

    // Step 2: Make the constructor private to prevent other classes from using 'new'
    private SalonManager() {
        System.out.println("SalonManager Created!");
    }

    // Step 3: Provide a public static method to get the single instance
    public static SalonManager getInstance() {
        if (instance == null) {
            instance = new SalonManager();  // create if not already created
        }
        return instance;
    }

    // Example method
    public void showServiceStatus() {
        System.out.println("All salon services are running smoothly.");
    }
}

