def sort(array) :
    for i in range (0,len(array)-1) :
        for j in range (0,len(array)-1) :
            if array[j] > array[j+1] :
                x = array[j]
                array[j] = array[j+1]
                array[j+1] = x
    return array

print(sort([12,1,23,455,65,1413,43,3425,23]))