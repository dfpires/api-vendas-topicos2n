public class Boeing757 extends Aviao {

    public Boeing757() {
        voarForma = new VoarDia();
        pousarForma = new PousarDia();
    }
    
    public void informarDados() {
        System.out.println("Informando dados de um Boeing 757.");
    }
}
