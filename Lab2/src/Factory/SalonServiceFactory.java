package Factory;

interface SalonService {
    void provideService();
}

class Haircut implements SalonService {
    public void provideService() {
        System.out.println("Providing Haircut service...");
    }
}

class Facial implements SalonService {
    public void provideService() {
        System.out.println("Providing Facial service...");
    }
}

class SalonServiceFactory {
    public SalonService getService(String type) {
        if (type == null) return null;
        if (type.equalsIgnoreCase("HAIRCUT")) return new Haircut();
        if (type.equalsIgnoreCase("FACIAL")) return new Facial();
        return null;
    }
}