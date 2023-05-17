import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input())
data = [list(input().rstrip()) for _ in range(n)]
if (n == 1):
    print(data[0][0])
    sys.exit()


def tree(arr: list, w: int):
    rst = ""
    quad = [[arr[i][:w//2] for i in range(w//2)],
            [arr[i][w//2:] for i in range(w//2)],
            [arr[i+w//2][:w//2] for i in range(w//2)],
            [arr[i+w//2][w//2:] for i in range(w//2)]]
    for i in range(4):
        result = 1
        prev = quad[i][0][0]
        for m in range(w//2):
            for k in range(w//2):
                if (quad[i][m][k] != prev):
                    result = 0
        if (result == 1):
            rst += f"{prev}"
        else:
            rst += tree(quad[i], w//2)
    if (rst == "0000" or rst == "1111"):
        if (w == n):
            return f"{rst[0]}"
        else:
            return f"({rst[0]})"
    else:
        return f"({rst})"


print(tree(data, n))
