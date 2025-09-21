import sys
input = sys.stdin.readline
print = sys.stdout.write

R, C, T = map(int, input().rstrip().split())
mtx = []
purifier = []
wasd = [[-1, 0], [0, -1], [1, 0], [0, 1]]

for r in range(R):
    mtx.append(list(map(int, input().rstrip().split())))
    if mtx[-1][0] == -1:
        purifier.append(r)

for t in range(T):
    # 확산
    add = [[0 for _ in range(C)] for __ in range(R)]
    for r in range(R):
        for c in range(C):
            if mtx[r][c] > 4:
                sprd = mtx[r][c] // 5
                sub = 0
                for [nr, nc] in wasd:
                    nr += r
                    nc += c
                    if nr < 0 or nr >= R or nc < 0 or nc >= C or (mtx[nr][nc] == -1):
                        continue
                    add[nr][nc] += sprd
                    sub += sprd
                mtx[r][c] -= sub
    for r in range(R):
        for c in range(C):
            mtx[r][c] += add[r][c]
    
    # 순환
    r, c = purifier[0], 1
    save = 0
    dir = [0, 1]
    while r != purifier[0] or c != 0:
        [mtx[r][c], save] = [save, mtx[r][c]]
        r += dir[0]
        c += dir[1]
        if dir[1] == 1 and c == C - 1:
            dir = [-1, 0]
        elif dir[0] == -1 and r == 0:
            dir = [0, -1]
        elif dir[1] == -1 and c == 0:
            dir = [1, 0]
    r, c = purifier[1], 1
    dir = [0, 1]
    save = 0
    while r != purifier[1] or c != 0:
        [mtx[r][c], save] = [save, mtx[r][c]]
        r += dir[0]
        c += dir[1]
        if dir[1] == 1 and c == C - 1:
            dir = [1, 0]
        elif dir[0] == 1 and r == R - 1:
            dir = [0, -1]
        elif dir[1] == -1 and c == 0:
            dir = [-1, 0]

rst = 0
for r in range(R):
    rst += sum(mtx[r])

print(f'{rst + 2}')