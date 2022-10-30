#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    // Complete the code.
    
    int i,a,b;
    cout << "Input first Number: ";
    cin >> a;
    cout << "Input second Number: ";
    cin >> b;
    string numbers[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    for(i = a; i <= b; i++){
        if(i > 9){
            if (i % 2 == 0 ) {
                cout << "even" << endl;
            }else {
            cout << "odd" << endl;
            }
        }else{
        cout << numbers[i] << endl;
            
        }
    }
    return 0;
}