import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())


def dp(depth, target, max, history):
    if (depth == target):
        print(f'{" ".join(map(str, history))}\n')
    else:
        for i in range(1, max + 1):
            if not (i in history):
                dp(depth + 1, target, max, [*history, i])


for i in range(1, n + 1):
    dp(1, m, n, [i])
