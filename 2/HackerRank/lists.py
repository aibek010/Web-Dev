def average_marks():
    n = int(input())
    data = {}

    for _ in range(n):
        line = input().split()
        name = line[0]
        scores = list(map(float, line[1:]))
        data[name] = scores

    query = input()
    avg = sum(data[query]) / len(data[query])
    print(f"{avg:.2f}")

average_marks()