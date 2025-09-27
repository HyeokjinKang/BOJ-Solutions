import sys
input = sys.stdin.readline
print = sys.stdout.write

inmap = []
dpmap = [] # dpmap[r][c] = [(r, c)에서 가로, 세로, 대각선으로 진행하는 경우]

n = int(input())
for _ in range(n):
    inmap.append(list(map(int, input().rstrip().split())))
    dpmap.append([[-1, -1, -1] for _ in range(n)])

def seek(r, c, d):
    if r == n - 1 and c == n - 1:
        return 1
    dp = dpmap[r][c]
    adder = [[1, 1, 2]]
    sum = 0
    if (d + 1) % 2 == 1:
        adder.append([0, 1, 0])
    if (d + 1) / 2 >= 1:
        adder.append([1, 0, 1])
    for [ra, ca, da] in adder:
        if dp[da] != -1:
            sum += dp[da]
            continue
        if r + ra >= n or c + ca >= n or (da == 2 and (inmap[r][c + ca] == 1 or inmap[r + ra][c] == 1)):
            dp[da] = 0
            continue
        if inmap[r + ra][c + ca] == 1:
            dp[da] = 0
            dpmap[r + ra][c + ca] = [0, 0, 0]
            continue
        dp[da] = seek(r + ra, c + ca, da)
        sum += dp[da]
    return sum

print(f'{seek(0, 1, 0)}')