#include<bits/stdc++.h>
using namespace std;

int main()
{
	ifstream infile("input.txt");

    int x=0,horizontal=0, vertical=0,aim = 0;
    string direction;

    while (infile >> direction>> x) {
        if (direction == "up") {
            vertical -= x;
        }
        else if (direction == "down") {
            vertical += x;
        }
        else if (direction == "forward") {
            horizontal += x;
            aim += vertical * x;
        }
    }
    //part 1
    cout<<vertical * horizontal<<endl;
    //part 2
    cout<<aim * horizontal;

    return 0;
}

//1670340
//1954293920