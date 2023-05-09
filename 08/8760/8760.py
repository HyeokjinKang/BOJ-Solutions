import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    a, b = map(int, input().rstrip().split())
    print(str(a*b//2)+"\n")
