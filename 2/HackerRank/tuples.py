def tuple_hash():
    n = int(input())
    t = tuple(map(int, input().split()))
    print(hash(t))

tuple_hash()
