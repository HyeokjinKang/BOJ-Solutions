import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
for _ in range(n):
    init, target = map(int, input().rstrip().split())
    willVisit = [[init, ""]]
    visited = [False] * 10001
    i = 0
    while (1):
        now = willVisit[i]
        if (now[0] == target):
            print(f"{now[1]}\n")
            break
        nowstr = str(now[0]).zfill(4)
        append = [[now[0] * 2 % 10000, now[1]+"D"],
                  [now[0] - 1 if now[0] - 1 >= 0 else 9999, now[1]+"S"],
                  [int(nowstr[1]+nowstr[2]+nowstr[3]+nowstr[0]), now[1]+"L"],
                  [int(nowstr[3]+nowstr[0]+nowstr[1]+nowstr[2]), now[1]+"R"]]
        for e in append:
            if (visited[e[0]] == False):
                visited[e[0]] = True
                willVisit.append(e)
        i += 1
