
import java.util.Random;
import java.util.Scanner;
import java.util.logging.ConsoleHandler;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Automat {
    public static void printTrays(Tray[][] trays){
        for (Tray[] i :
                trays){
            for (Tray tray :
                    i) {
                System.out.print(tray + " | ");
            }
            System.out.println();
        }
    }

    public static float wydaj(Tray[][] trays,float money,int id){
        for (int i=0 ;i<trays.length;i++){
            for (int j=0;j<trays[i].length;j++) {
                if (trays[i][j].getNumber()==id){
                    if (trays[i][j].getAmount()>0 && money>=trays[i][j].getPrice()){
                        trays[i][j].dropOne();
                        return money-trays[i][j].getPrice();
                    }
                    else {
                        return money;
                    }
                }
            }
        }
        return money;
    }
    public static float insert(float money, float value){
        return money+value;
    }
    public static boolean checkRegex(String regex , String input){
        Pattern compiledPattern = Pattern.compile(regex);
        Matcher matcher = compiledPattern.matcher(input);
//        System.out.println(matcher.find());
//        System.out.println(matcher.matches());
        return matcher.matches();
    }
    public static void main(String[] args){
        System.out.println("AUTOMAT PZDR600");
        System.out.println("INICJALIZACJA");
        Scanner scanner = new Scanner(System.in);
        String userInput="";
        Tray[][] trays=new Tray[10][5];
        float money=0;
        System.out.println("ladowanie danych");
        Random random= new Random();
        int number=1;
        for (int i=0 ;i<trays.length;i++){
            for (int j=0;j<trays[i].length;j++) {
                Tray tray= new Tray();
                tray.setAmount(random.nextInt(11));
//                tray.setPrice(((float)random.nextDouble() * (float)4) + (float)1);
                tray.setPrice((float) (random.nextInt(6) * 0.5 + 1));
                tray.setNumber(number++);
                trays[i][j]=tray;
            }
        }
        System.out.println("GOTOWE");

        while (true){
            System.out.println("Czekam na polecenie");
            printTrays(trays);
            System.out.println("Bekon: "+money);
            userInput=scanner.nextLine().trim();
            if (checkRegex("^insert\\s+\\d+.?\\d+",userInput)) {
                String[] splited = userInput.split("\\s+");
                money+=Float.parseFloat(splited[1]);
            }
            if (checkRegex("^select\\s+\\d+",userInput)){
                String[] splited = userInput.split("\\s+");
                float reszta = wydaj(trays,money,Integer.valueOf(splited[1]));
                if (reszta==money){
                    System.out.println("za malo pieniedzy lub brak towaru");
                }
                else{
                    System.out.println("wydano reszte: " + reszta+" i towar");
                    money=0;
                }
            }
            if (checkRegex("^cancel",userInput)){
                String[] splited = userInput.split("\\s+");
                System.out.println("oddano: "+ money);
                money=0;
            }
        }
    }
}
