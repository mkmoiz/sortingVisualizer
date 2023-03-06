//<selectionSort>
// async functions and promises are used.




//you can change the speed by changing the parameter in speed function the parameter values is time in ms.

//algojs is imported by <script> in index.html  src attribute.



async function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            states[i] = 1;
            if (arr[j] < arr[minIdx]) {
                states[j] = 0;
                minIdx = j;
                // states[j]=-1;
            }
        }
        await swap(arr, i, minIdx);
    }
}
//</selectionSort>




//<bubbleSort>
async function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                states[j] = 0;
                states[j + 1] = 0;
                await swap(arr, j, j + 1);
                states[j] = -1
                states[j + 1] = -1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        states[i] = 1;
    }
}
// </bubbleSort>


//mergesort 

async function mergeSort(a, start, end) {
    if (end - start <= 1) return
    var mid = Math.round((end + start) / 2);
    await mergeSort(a, start, mid)
    await mergeSort(a, mid, end)
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }
    let i = start,
        j = mid
    while (i < end && j < end) {
        if (a[i] > a[j]) {
            let t = a[j]
            // states[i]=0;
            // states[j]=-1;
            a.splice(j, 1)
            a.splice(i, 0, t)
            j++
        }
        // states[i]=-1;
        i++
        if (i === j) j++
        await sleep(25)
    }
    if (start === 0 && end === a.length) {
        await sleep(50)
    }
    // states[i]=-1;
    for (let i = start; i < end; i++) {
        states[i] = -1;
    }
}
//^^^^mergesorot




// quicksort.


async function quickSort(arr, start, end) {
    if (start >= end) return;

    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)]);


}

async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }
    let pivotValue = arr[end];
    let pIndex = start;
    states[pIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pIndex);
            states[pIndex] = -1;
            pIndex++
            states[pIndex] = 0;
        }
    }
    await swap(arr, pIndex, end)
    return pIndex;
}


// ^^^^above is quicksort.




async function swap(arr, i, j) {
    //swapping is performed after delay
    await sleep(slider.value());//slider.value() returns the value from slider present in setup function

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
