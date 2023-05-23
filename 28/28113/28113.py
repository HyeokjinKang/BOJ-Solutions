import sys
input = sys.stdin.readline
print = sys.stdout.write

n, a, b = map(int, input().rstrip().split())

if n > b:
    print("Bus")
else:
    if b > a:
        print("Bus")
    elif a > b:
        print("Subway")
    else:
        print("Anything")
