import sys
input = sys.stdin.readline
print = sys.stdout.write
e = 1e-9

n = int(input())
if (n == 0):
    print("0")
else:
    data = [int(input()) for _ in range(n)]
    data.sort()
    s = round(n * 0.15 + e)
    avg = sum(data[s:n-s]) / (n - 2 * s)
    print(str(round(avg + e)))
