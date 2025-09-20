import sys
input = sys.stdin.readline
print = sys.stdout.write

n = int(input().rstrip())

def draw(m, n, out):
    if n == m:
        return '\n'.join(out)
    l = len(out)
    for i in range(l):
        line = out[i]
        out.append(line + ' ' + line)
        out[i] = ' ' * m + out[i] + ' ' * m
    return draw(m * 2, n, out)


print(draw(3, n, ["  *  ", " * * ", "*****"]))