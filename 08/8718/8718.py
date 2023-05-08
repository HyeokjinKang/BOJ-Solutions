import sys
input = sys.stdin.readline
print = sys.stdout.write

x, k = map(int, input().rstrip().split())
if 7*k <= x:
    print(str(k*7000))
elif 3.5*k <= x:
    print(str(k*3500))
elif 1.75*k <= x:
    print(str(k*1750))
else:
    print(str(0))
