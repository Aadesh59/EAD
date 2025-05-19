package singleton;

public class Main {
    public static void main(String[] args) {
        // Get the single instance of SalonManager
        SalonManager manager1 = SalonManager.getInstance();
        manager1.showServiceStatus();

        // Try to get another instance
        SalonManager manager2 = SalonManager.getInstance();
        manager2.showServiceStatus();

        // Check if both are the same object
        if (manager1 == manager2) {
            System.out.println("Both are the same instance (singleton).");
        }
    }
}

