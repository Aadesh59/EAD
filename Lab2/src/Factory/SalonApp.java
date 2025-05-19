package Factory;

public class SalonApp {
    public static void main(String[] args) {
        SalonServiceFactory factory = new SalonServiceFactory();

        SalonService service1 = factory.getService("Haircut");
        service1.provideService();  // Output: Providing Haircut service...

        SalonService service2 = factory.getService("Facial");
        service2.provideService();  // Output: Providing Facial service...
    }
}

