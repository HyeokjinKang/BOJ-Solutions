import sys
input = sys.stdin.readline
print = sys.stdout.write

a = 2
n = int(input())
for _ in range(n):
    a = a * 2 - 1
print(f"{a**2}")
