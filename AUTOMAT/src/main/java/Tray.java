public class Tray {
    public int amount;
    public float price;
    public int number;

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public float getPrice() {
        return price;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public boolean dropOne(){
        if (this.amount>0){
            this.amount--;
            return true;
        }
        else return false;
    }

    @Override public String toString(){
        String number = String.valueOf(this.number);
        String amount = String.valueOf(this.amount);
        String price = String.format("%.02f", this.price);;
        return "id "+ number + " " + "ilosc " + amount + " " + "cena "+price;
    }

}
