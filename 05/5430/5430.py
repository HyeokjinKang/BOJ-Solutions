import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())

result = ""
for _ in range(n):
    direction = 1
    func = list(input().rstrip())
    a = int(input())
    arrInput = (input().rstrip())[1:-1]
    arr = list(map(int, arrInput.split(","))) if len(arrInput) > 0 else []
    error = False
    for cmd in func:
        if cmd == "D":
            if len(arr):
                if direction == 1:
                    arr.pop(0)
                else:
                    arr.pop()
            else:
                result += "error\n"
                error = True
                break
        elif cmd == "R":
            direction *= -1
    if not (error):
        if direction == -1:
            arr = arr[::-1]
        text = ",".join(map(str, arr))
        result += f"[{text}]\n"

print(result)
