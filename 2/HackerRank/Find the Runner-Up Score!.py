def runner_up(arr):
    arr = list(set(arr))
    arr.sort()
    return arr[-2]

n = int(input())
arr = list(map(int, input().split()))
print(runner_up(arr))