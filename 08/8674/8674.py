import sys
input = sys.stdin.readline

a, b = input().rstrip().split()
a = int(a)
b = int(b)
if ((a % 2 == 0) or (b % 2 == 0)):
    print(0)
else:
    print(min(a, b))
