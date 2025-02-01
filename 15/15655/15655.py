import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
data = list(map(int, input().rstrip().split()))
data.sort()


def dp(depth, target, max, history):
    if (depth == target):
        for i in history:
            print(f'{data[i]} ')
        print("\n")
    else:
        for i in range(history[len(history) - 1] + 1, max - target + depth + 1):
            dp(depth + 1, target, max, [*history, i])


for i in range(0, n - m + 1):
    dp(1, m, n, [i])
