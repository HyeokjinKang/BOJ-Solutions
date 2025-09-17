import sys
input = sys.stdin.readline
print = sys.stdout.write

matrix = []

n = int(input())
for _ in range(n):
    matrix.append(list(map(int, input().rstrip().split())))

willVisit = [[0, 1, 1]] # r, c, prev_direction
cnt = 0
i = -1
while i < len(willVisit) - 1:
    i += 1
    [r, c, d] = willVisit[i]
    if r == n - 1 and c == n - 1:
        cnt += 1
        continue
    adder = []
    if d % 2 == 1:
        adder.append([0, 1, 1])
    if d / 2 >= 1:
        adder.append([1, 0, 2])
    adder.append([1, 1, 3])
    for [ra, ca, da] in adder:
        if r + ra >= n or c + ca >= n or matrix[r + ra][c + ca] == 1:
            continue
        if da == 3 and (matrix[r][c + ca] == 1 or matrix[r + ra][c] == 1):
            continue
        willVisit.append([r + ra, c + ca, da])

print(f'{cnt}')