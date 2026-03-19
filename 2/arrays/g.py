n = int(input())
arr = list(map(int, input().split()))

arr.reverse()

for x in arr:
    print(x, end=" ")