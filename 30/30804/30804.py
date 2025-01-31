from collections import deque
import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = deque(map(int, input().rstrip().split()))
count = {data[0]: 1}

l = 0
r = 0
max = 0
now = 0

while True:
    if (len(count.keys()) > 2):
        now -= 1
        count[data[l]] -= 1
        if (count[data[l]] == 0):
            del count[data[l]]
        l += 1
    else:
        now += 1
        if max < now:
            max = now
        if r == len(data) - 1:
            break
        r += 1
        count[data[r]] = count.get(data[r], 0) + 1

print(f'{max}')
