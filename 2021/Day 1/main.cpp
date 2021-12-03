#include<bits/stdc++.h>
using namespace std;

int main()
{
	ifstream infile("input.txt");

	vector<int> input;

	if(!infile){
		cout<<"Error opening the files"<<endl;
		return -1;
	}
	int temp, bigNumber = 0;
	while(infile >> temp){
		input.push_back(temp);
	}
	for (int i = 1; i < input.size(); ++i)
	{	
		if(input.at(i) > input.at(i-1)){
			bigNumber++;
		}
	}
	//part 1
	cout<<bigNumber<<endl;
	int sumChange = 0;
	int sum1= 0, sum2 = 0;
	for(int j = 3; j < input.size(); j++){
		sum1= input.at(j - 3) + input.at(j - 2) + input.at(j - 1);
		sum2= input.at(j - 2) + input.at(j - 1) + input.at(j);
		if(sum2 > sum1){
			sumChange++;
		}

	}
	cout<<sumChange;
	return 0;
}