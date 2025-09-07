import sys
input = sys.stdin.readline
print = sys.stdout.write

a = input().rstrip()
b = input().rstrip()
n = len(a) + 1
m = len(b) + 1

mtx = [[0 for _ in range(m)] for __ in range(n)]

for i in range(1, n):
  for j in range(1, m):
    if a[i - 1] == b[j - 1]:
      mtx[i][j] = mtx[i - 1][j - 1] + 1
    else:
      mtx[i][j] = max(mtx[i - 1][j], mtx[i][j - 1])

print(f'{mtx[n - 1][m - 1]}')