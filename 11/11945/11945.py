import sys

n = int(input().split()[0])
result = ""
for _ in range(n):
    s = input()
    result += f"{s[::-1]}\n"

print(result)
