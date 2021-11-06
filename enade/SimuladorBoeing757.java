public class SimuladorBoeing757 {
    
    public static void main(String[] args) {
        Boeing757 b757 = new Boeing757();
        
        b757.performanceVoar();
        b757.performancePousar();
        b757.setVoar(new VoarNoite());
        b757.setPousar(new PousarNoite());
        b757.performanceVoar();
        b757.performancePousar();
        }
}
