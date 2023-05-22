import sys
input = sys.stdin.readline
print = sys.stdout.write

a, b = map(int, input().rstrip().split())
c, d = map(int, input().rstrip().split())

print(str(min(a+d, b+c)))
