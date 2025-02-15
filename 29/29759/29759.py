import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
mtx = []
seive = [0] * 1000001
rowMul = [1] * (n ** 2)
colMul = [1] * (n ** 2)
areaMul = [[1] * n for _ in range(n)]

for i in range(2, 1001):
    if seive[i] == 1:
        break
    mul = 2
    while i * mul <= 1000000:
        seive[i * mul] = 1
        mul += 1

for y in range(n ** 2):
    mtx.append(list(map(int, input().rstrip().split())))


def gcd(a, b):
    if a == 0 or b == 0:
        return 1
    if b < a:
        a, b = b, a
    while b > 0:
        a, b = b, a % b
    return a


def check(y, x, num):
    row = 1
    col = 1
    area = 1
    if rowMul[y] == 1:
        for i in range(n ** 2):
            if mtx[y][i] != 0:
                row *= mtx[y][i]
        rowMul[y] = row
    if gcd(rowMul[y], num) != 1:
        return True
    if colMul[x] == 1:
        for i in range(n ** 2):
            if mtx[i][x] != 0:
                col *= mtx[i][x]
        colMul[x] = col
    if gcd(colMul[x], num) != 1:
        return True
    if areaMul[y // n][x // n] == 1:
        for i in range(n):
            for j in range(n):
                search = mtx[n * (y // n) + i][n * (x // n) + j]
                if search != 0:
                    area *= search
        areaMul[y // n][x // n] = area
    if gcd(areaMul[y // n][x // n], num) != 1:
        return True
    rowMul[y] *= num
    colMul[x] *= num
    areaMul[y // n][x // n] *= num
    return False


for y in range(n ** 2):
    for x in range(n ** 2):
        if mtx[y][x] == 0:
            index = 2
            while True:
                while seive[index] == 1:
                    index += 1
                if check(y, x, index) == False:
                    break
                index += 1
            mtx[y][x] = index
        print(f'{mtx[y][x]} ')
    print('\n')
