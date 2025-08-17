import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())

data = [list(map(int, input().rstrip())) for _ in range(n)]
visited_map = [[[0, 0] for _ in range(m)] for __ in range(n)]
visited_map[0][0][0] = 1
distances = []

will_visit = [[0, 0, 0]]
index = 0
while index < len(will_visit):
    [y, x, level] = will_visit[index]
    num = visited_map[y][x][level]
    if y == n - 1 and x == m - 1:
        distances.append(num)
    else:
        candidate = [[y - 1, x], [y, x - 1], [y + 1, x], [y, x + 1]]
        for i in range(4):
            [new_y, new_x] = candidate[i]
            if not ((new_y < 0) or (new_x < 0) or (new_y > n - 1) or (new_x > m - 1)):
                new_level = level if data[new_y][new_x] == 0 else level + 1
                new_will_visit = [new_y, new_x, new_level]
                if new_level < 2 and visited_map[new_y][new_x][new_level] == 0:
                    will_visit.append(new_will_visit)
                    visited_map[new_y][new_x][new_level] = num + 1
    index += 1

if len(distances) == 0:
    print('-1')
else:
    print(f'{min(distances)}')
