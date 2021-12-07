#include<bits/stdc++.h>


int main()
{
	std::ifstream infile("input.txt");
	const int bits = 12;
	std::vector<std::bitset<bits>> reports;
	std::string line;
	while(infile >> line){
		reports.push_back(std::bitset<bits>(line));
	}
	//so to determine gamma and epsilon rate
	std::bitset<bits> gamma_rate, epsilon_rate;
	for(int i = bits-1; i >= 0; i--)
	{
		int counts[2] {0,0};
		for(auto report : reports)
		{
			counts[report[i]]++;
		}
		gamma_rate[i] = counts[0] > counts[1] ? 0 : 1;
	}
	epsilon_rate = std::bitset<bits>(gamma_rate).flip();
	//part 1 answers
	std::cout << "Gamma Rate: " << gamma_rate.to_ulong() << std::endl;
	std::cout << "Epsilon Rate : " << epsilon_rate.to_ulong() << std::endl;
	std::cout << "Electric Consumption : " << gamma_rate.to_ulong()*epsilon_rate.to_ulong() << std::endl;

	return 0;
}