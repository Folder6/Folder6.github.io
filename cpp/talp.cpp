#include <iostream>
#include <cstdlib>

int main()
{

    int a;
    int b=1;
    bool betingelse=false;



    while(betingelse==false){

        std::cout << "Indtast et tal som ikke er " << b << std::endl;
        std::cin >> a;

        if(b==a)
        {
            std::cout << "Du måtte ikke skrive " << b << std::endl;

            return betingelse=true;
        }
        if(b==10) 
        {
            std::cout << "Wow du er godt nok tålmodig" << std::endl;
            return betingelse=true;
        }

         b++;

    }
}





