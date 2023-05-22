n = int(input())
data = list(map(int, input().split()))
sumN = sum(data)
data.sort()
rst = 0
for i in range(len(data)):
    if (sumN % 2 == 0):
        print(sumN)
        rst = 1
        break
    if (data[i] % 2 == 1):
        sumN -= data[i]
        print(sumN)
        rst = 1
        break
if rst == 0:
    print("0")
