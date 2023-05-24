import sys
input = sys.stdin.readline
print = sys.stdout.write

data = list(map(int, input().rstrip().split()))
x, y, r = map(int, input().rstrip().split())
try:
    print(f"{data.index(x)+1}")
except:
    print("0")
