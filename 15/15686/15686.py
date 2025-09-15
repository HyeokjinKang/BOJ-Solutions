import sys, math
input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().rstrip().split())
home = []
chick = []
dist = []

for i in range(n):
    level = list(map(int, input().rstrip().split()))
    for j in range(n):
        if level[j] == 1:
            home.append([i, j])
        elif level[j] == 2:
            chick.append([i, j])

for i, s in enumerate(home):
    dist.append([])
    for e in chick:
        distcalc = abs(e[0] - s[0]) + abs(e[1] - s[1])
        dist[i].append(distcalc)

def brute(cnt, maxcnt, low, opened):
    if maxcnt > cnt:
        lowdist = math.inf
        for i in range(low, len(chick) - maxcnt + cnt + 1):
            calc = brute(cnt + 1, maxcnt, i + 1, opened + [i])
            if calc < lowdist:
                lowdist = calc
        return lowdist
    else:
        distsum = 0
        for homedist in dist:
            lowdist = math.inf
            for i, d in enumerate(homedist):
                if (i in opened) and (lowdist > d):
                    lowdist = d
            distsum += lowdist
        return distsum

print(f'{brute(0, m, 0, [])}')