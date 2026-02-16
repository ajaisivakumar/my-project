def InsertionSort(arr):
    for i in range(1,len(arr)):
        j = i 
        while( arr[j] < arr[j-1] and j > 0 ):
            arr[j-1], arr[j] = arr[j] , arr[j-1] 
            j = j -1 
    return arr
arr = [3,2,4,35,7]
print(InsertionSort(arr))                  




#   [         3       ,   2    ,     4      ,   35  ,       7 ]
#                        i,j
# j-1 > j so swap 
#   [         2       ,   3    ,     4      ,   35  ,       7 ]
#             j           i 
#  [         2       ,    3    ,     4      ,   35  ,       7 ]
#                                    i,j
# j - 1 < j so no swap 
#  [         2       ,    3    ,     4      ,   35  ,       7 ]
#                                              i,j
# j - 1 < j so no swap
#  [         2       ,    3    ,     4      ,   35  ,       7 ]
#                                                          i,j
#j-1 > j so swap 
#  [         2       ,    3    ,     4      ,   7   ,       35 ]
#                                               j 