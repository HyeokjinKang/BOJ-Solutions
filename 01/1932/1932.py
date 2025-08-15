import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
tri = []
dp = []

for _ in range(n):
  tri.append(list(map(int, input().rstrip().split())))
  dp.append([-1 for i in range (n + 1)])

def search(d, i):
  add = 0
  if dp[d][i] != -1:
    return dp[d][i]
  if d != n - 1:
    add = max(search(d + 1, i), search(d + 1, i + 1))
  dp[d][i] = tri[d][i] + add
  return dp[d][i]

print(f'{search(0, 0)}')
