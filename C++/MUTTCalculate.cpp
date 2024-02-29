#include <stdio.h>
int main(){
    double a = 1, sum = 0;
    int n, i;
    scanf("%d", &n);
    for(i = 1; i <= n; i++){
        a *= i;
        sum += a;
    }
    printf("%.21f", sum);
    return 0;
}