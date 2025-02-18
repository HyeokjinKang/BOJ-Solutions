import sys
input = sys.stdin.readline
print = sys.stdout.write

dp = [0, 0, 0]
n = int(input())
for _ in range(n):
    rgb = list(map(int, input().rstrip().split()))
    for i in range(3):
        min = 1000*1000
        for j in range(3):
            if i != j:
                if dp[j] < min:
                    min = dp[j]
        rgb[i] += min
    dp = rgb

dp.sort()
print(f'{dp[0]}')
