import sys
from math import sqrt
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = [int(input()) for _ in range(n)]

for num in data:
    if num <= 1:
        print('2\n')
    else:
        add = 0
        while True:
            isPrime = True
            for i in range(2, int(sqrt(num + add)) + 1):
                if (num + add) % i == 0:
                    isPrime = False
                    break
            if isPrime:
                break
            add += 1
        print(f'{num + add}\n')
