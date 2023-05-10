import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    a, b = input().rstrip().split()
    print(("OK" if a == b else "ERROR") + "\n")
