import sys
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
data = list(map(int, input().rstrip().split()))
now = 1
visited = []
summ = 0

for e in data:
    temp = now
    # 왼쪽으로 이동하는경우
    counter = 0
    while (e != now):
        counter += 1
        now -= 1
        if now < 1:
            now = n
        while (now in visited):
            now -= 1
            if now < 1:
                now = n
    left = counter

    # 오른쪽으로 이동하는경우
    now = temp
    counter = 0
    while (e != now):
        counter += 1
        now += 1
        if now > n:
            now = 1
        while (now in visited):
            now += 1
            if now > n:
                now = 1
    right = counter

    summ += min(left, right)

    now += 1
    if now > n:
        now = 1
    while (now in visited):
        now += 1
        if now > n:
            now = 1
    visited.append(e)

print(f"{summ}")
