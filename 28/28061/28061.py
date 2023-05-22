import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = map(int, input().rstrip().split())
maxN = 0
for i, e in enumerate(data):
    if maxN < e - n + i:
        maxN = e - n + i

print(f"{maxN}")
