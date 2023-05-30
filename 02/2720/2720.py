import sys
input = sys.stdin.readline
print = sys.stdout.write

i = int(input())
for _ in range(i):
    m = int(input())
    q = m // 25
    d = (m - (25 * q)) // 10
    n = (m - (25 * q) - (10 * d)) // 5
    p = m - (25 * q) - (10 * d) - (5 * n)

    print(f"{q} {d} {n} {p}\n")
