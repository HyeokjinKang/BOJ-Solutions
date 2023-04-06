import sys

cnt = [0] * 10001
first = 1

for line in sys.stdin:
    if(first == 1):
        first -= 1
    else:
        cnt[int(line)] += 1

for i in range(1, 10001):
    for j in range(cnt[i]):
        print(i)