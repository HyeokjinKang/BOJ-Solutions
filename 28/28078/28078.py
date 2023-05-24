import sys
from collections import deque
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
queue = deque()  # 앞-뒤, 0:b, 1:w
d = 0  # 0:뒤-앞 1:뒤앞 2:앞-뒤 3.앞뒤
b = 0
w = 0
for _ in range(n):
    i = input().rstrip()
    if i == "pop":
        if len(queue) != 0:
            e = queue.popleft()
            if e == 0:
                b -= 1
            elif e == 1:
                w -= 1
    else:
        cmd, opt = i.split()
        if cmd == "push":
            if opt == "b":
                queue.append(0)
                b += 1
            if opt == "w":
                queue.append(1)
                w += 1
        elif cmd == "rotate":
            if opt == "l":
                d -= 1
            elif opt == "r":
                d += 1
            if d == 4:
                d = 0
            elif d == -1:
                d = 3
        elif cmd == "count":
            if opt == "b":
                print(f"{b}\n")
            elif opt == "w":
                print(f"{w}\n")
    if d % 2 == 1:
        while (len(queue) != 0 and (queue[0 if d == 1 else len(queue) - 1]) != 1):
            if d == 1:
                queue.popleft()
            else:
                queue.pop()
            b -= 1
