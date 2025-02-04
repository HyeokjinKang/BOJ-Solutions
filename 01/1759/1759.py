import sys
input = sys.stdin.readline
print = sys.stdout.write

l, c = map(int, input().rstrip().split())
data = input().rstrip().split()
data.sort()


def rc(depth, target, max, history):
    if (depth == target):
        vo = 0
        co = 0
        result = ''
        for i in history:
            if data[i] in ['a', 'e', 'i', 'o', 'u']:
                vo += 1
            else:
                co += 1
            result += data[i]
        if (vo >= 1 and co >= 2):
            print(f'{result}\n')
    else:
        for i in range(history[len(history) - 1] + 1, max - target + depth + 1):
            rc(depth + 1, target, max, [*history, i])


for i in range(0, c - l + 1):
    rc(1, l, c, [i])
