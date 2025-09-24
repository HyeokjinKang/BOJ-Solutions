import sys
input = sys.stdin.readline
print = sys.stdout.write

R, C = map(int, input().rstrip().split())
mtx = []

for _ in range(R):
    mtx.append(list(map(lambda x: ord(x) - 65, list(input().rstrip()))))

def visit(r, c, visited):
    visited[mtx[r][c]] = 1
    wasd = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    result = 0
    for [ar, ac] in wasd:
        nr = r + ar
        nc = c + ac
        if 0 <= nr and nr < R and 0 <= nc and nc < C and visited[mtx[nr][nc]] == 0:
            result = max(result, visit(nr, nc, visited.copy()))
    return result + 1

print(f'{visit(0, 0, [0 for _ in range(26)])}')