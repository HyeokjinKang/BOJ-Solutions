import sys
import heapq
input = sys.stdin.readline
print = sys.stdout.write

result = ""
n = int(input())
for i in range(n):
    minheap = []
    maxheap = []
    deleted = [False] * 1000001
    key = -1
    m = int(input())
    for j in range(m):
        key += 1
        cmd, opt = input().rstrip().split()
        opt = int(opt)
        if cmd == "I":
            heapq.heappush(minheap, (opt, key))
            heapq.heappush(maxheap, (-opt, key))
        if cmd == "D":
            while (len(maxheap if opt == 1 else minheap) != 0 and deleted[maxheap[0][1] if opt == 1 else minheap[0][1]]):
                heapq.heappop(maxheap if opt == 1 else minheap)
            if len(maxheap if opt == 1 else minheap) != 0:
                deleted[heapq.heappop(maxheap if opt == 1 else minheap)
                        [1]] = True
    while (len(maxheap) != 0 and deleted[maxheap[0][1]]):
        heapq.heappop(maxheap)
    while (len(minheap) != 0 and deleted[minheap[0][1]]):
        heapq.heappop(minheap)
    if len(minheap) == 0:
        result += "EMPTY\n"
    else:
        result += f"{-maxheap[0][0]} {minheap[0][0]}\n"

print(result)
