import sys
input = sys.stdin.readline
print = sys.stdout.write

n, k = map(int, input().rstrip().split())
mono = []
dp = [{} for _ in range(n)]

for _ in range(n):
    mono.append(list(map(int, input().rstrip().split())))

mono.sort(key = lambda x:x[0], reverse = True)

def calc(index, maxWeight):
    if maxWeight == 0 or index == n:
        return 0
    if maxWeight in dp[index]:
        return dp[index][maxWeight]
    thing = mono[index]
    yes = 0
    no = calc(index + 1, maxWeight)
    if thing[0] <= maxWeight:
        yes = thing[1] + calc(index + 1, maxWeight - thing[0])
    maxValue = max(yes, no)
    dp[index][maxWeight] = maxValue
    return maxValue

print(f'{calc(0, k)}')