import sys
input = sys.stdin.readline
print = sys.stdout.write

n, c = map(int, input().rstrip().split())
scores = list(map(int, input().rstrip().split()))
scores.sort(reverse=True)
print(f"{scores[c-1]}")
