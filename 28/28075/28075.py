import sys
input = sys.stdin.readline
print = sys.stdout.write

[n, m] = map(int, input().rstrip().split())
missionA = list(map(int, input().rstrip().split()))
missionB = list(map(int, input().rstrip().split()))
count = 0


def recursive(day, prev, score):
    if day == n:
        if score >= m:
            global count
            count += 1
        return
    for i in range(3):
        if prev == i:
            recursive(day+1, i, score + missionA[i] / 2)
        else:
            recursive(day+1, i, score + missionA[i])
    for i in range(3):
        if prev == i:
            recursive(day+1, i, score + missionB[i] / 2)
        else:
            recursive(day+1, i, score + missionB[i])


recursive(0, -1, 0)
print(str(count))
