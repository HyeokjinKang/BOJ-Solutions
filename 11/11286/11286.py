import sys
import heapq
input = sys.stdin.readline
print = sys.stdout.write

result = ""
heap = []
n = int(input())
for i in range(n):
    cmd = int(input())
    if cmd != 0:
        heapq.heappush(heap, (abs(cmd), cmd))
    else:
        if len(heap):
            result += f"{heapq.heappop(heap)[1]}\n"
        else:
            result += "0\n"

print(result)
