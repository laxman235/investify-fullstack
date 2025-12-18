package BasicMath;
/*
* You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.
A prime number is a number which has no divisors except 1 and itself.*/
public class  CheckForPrimeNumber {
    public static void main(String[] args) {
        System.out.println(isPrime(3));
    }
    public static boolean isPrime(int n) {
            int counter=0;
            for(int i=1;i*i<n;i++){
                if(n%i==0){
                    counter++;
                    if(n/i!=i){
                        counter++;
                    }
                }
            }
            if(counter==2){
                return true;
            }
            return false;
        }
}
