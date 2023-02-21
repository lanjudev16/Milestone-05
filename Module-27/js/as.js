
function findingBadData(findBadData) {
    if(Array.isArray(findBadData)){
        let count = 0;
        for (let i = 0; i < findBadData.length; i++) { // lop throw and count bad data
            if (findBadData[i] < 0) {
                count++;
            }
        }
        if (count == 0) {
            return 0
        } else {
            return count;
        }
    }else{
        return 'error from findingBadData function ,please enter a  array'
    }
}

console.log(findingBadData([ 2, -5, -7, -13]))