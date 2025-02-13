import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
data = list(map(int, input().rstrip().split()))
data.sort()


def rc(depth, target, max, history):
    if (depth == target):
        for i in history:
            print(f'{data[i]} ')
        print("\n")
    else:
        visited = []
        for i in range(history[len(history) - 1], max):
            if not (data[i] in visited):
                rc(depth + 1, target, max, [*history, i])
                visited.append(data[i])


visited = []
for i in range(0, n):
    if not (data[i] in visited):
        rc(1, m, n, [i])
        visited.append(data[i])
