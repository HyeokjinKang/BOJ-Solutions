import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
time = list(map(int, input().rstrip().split()))
i = 0

while m > 0:
    m -= time[i] - 1
    i += 1
    if m > 0 and i == n:
        print("OUT")
        break

if m <= 0:
    print("DIMI")
