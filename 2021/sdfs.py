import os

x_list=[]
#add values to the list by looping
for i in range(30):
    x_list.append("Day {}".format(i+1))

print(x_list)

for items in x_list:
    os.mkdir(items)