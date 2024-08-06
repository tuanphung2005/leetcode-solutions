class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(key) {
        this.heap.push(key);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].pushes >= this.heap[parentIndex].pushes) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].pushes < this.heap[smallest].pushes) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].pushes < this.heap[smallest].pushes) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function minimumNumberOfPushesToTypeWord(word) {

    const frequency = {};
    for (const char of word) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    const sortedChars = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

    const minHeap = new MinHeap();
    for (let i = 0; i < 8; i++) {
        minHeap.insert({ key: i, pushes: 0 });
    }

    let totalPushes = 0;
    for (const char of sortedChars) {
        const freq = frequency[char];
        const { key, pushes } = minHeap.extractMin();
        const newPushes = pushes + 1;
        totalPushes += freq * newPushes;
        minHeap.insert({ key, pushes: newPushes });
    }

    return totalPushes;
}

console.log(minimumNumberOfPushesToTypeWord('abcde')); // Output: 5
console.log(minimumNumberOfPushesToTypeWord('xyzxyzxyzxyz')); // Output: 24
console.log(minimumNumberOfPushesToTypeWord('aabbccddeeffgghhiiiiii')); // Output: 24
console.log(minimumNumberOfPushesToTypeWord('aremgjnptohswfdkyuzvicqxb')); // Output: 52