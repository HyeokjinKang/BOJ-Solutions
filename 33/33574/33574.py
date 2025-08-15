import sys
input = sys.stdin.readline
print = sys.stdout.write

q = int(input())
s = []
for _ in range(q):
    arg = list(map(int, input().rstrip().split()))
    if arg[0] == 1:
        if arg[1] == 1:
            s.sort()
        else:
            s.sort(reverse=True)
    else:
        x = arg[1]
        t = arg[2]
        s.insert(x, t)

print(f"{len(s)}\n{' '.join(map(str, s))}")
