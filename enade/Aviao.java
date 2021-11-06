public abstract class Aviao {
    // variáveis
    Voar voarForma;
    Pousar pousarForma;

    public Aviao() {

    }
       
    public void performanceVoar() {
        voarForma.voar();
    }
    public void performancePousar() {
        pousarForma.pousar();
    }
    public void setVoar(Voar v) {
        voarForma = v;
    }
    public void setPousar(Pousar p) {
        pousarForma = p;
    }

    public abstract void informarDados();

 }
