import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
length = 0
for i in range(n-1):
    length += i
length = length * 2+(n - 1)
print(f"{length}\n")
for i in range(n-1):
    print(f"{i+2} {1}\n")
