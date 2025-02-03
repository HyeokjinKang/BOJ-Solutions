import sys
input = sys.stdin.readline
print = sys.stdout.write

end = int(input())
data = list(map(int, input().rstrip().split()))
dp = [0 for _ in range(0, end)]
graph = {}

result = 0
now = 0

for i in range(end - 1, -1, -1):
    max = 0
    for j in range(i, end):
        if data[i] < data[j]:
            if max < dp[j]:
                max = dp[j]
                graph[i] = j
    dp[i] = max + 1
    if result < max + 1:
        result = max + 1
        now = i

print(f'{result}\n')
print(f'{data[now]}')
while now in graph:
    print(f' {data[graph[now]]}')
    now = graph[now]
