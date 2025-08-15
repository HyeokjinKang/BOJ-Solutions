import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
data = []
dp = []
for i in range(n):
  data.append(list(map(int, input().rstrip().split())))
  dp.append([0 for _ in range(n)])
  row_sum = 0
  for j in range(n):
    row_sum += data[i][j]
    sum = row_sum
    if i != 0:
      sum += dp[i - 1][j]
    dp[i][j] = sum
for i in range(m):
  y1, x1, y2, x2 = map(int, input().rstrip().split())
  rst = dp[y2 - 1][x2 - 1]
  if x1 > 1:
    rst -= dp[y2 - 1][x1 - 2]
  if y1 > 1:
    rst -= dp[y1 - 2][x2 - 1]
  if x1 > 1 and y1 > 1:
    rst += dp[y1 - 2][x1 - 2]
  print(f'{rst}\n')
