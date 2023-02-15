export type isUniqueSignature = (s: string) => boolean

// Time: O(S^2)
// Space: O(1)
export const isUniqueBruteForce: isUniqueSignature = (s: string) => {
    const sL: number = s.length
    // O(S)
    for(let i = 0; i < s.length; i++){
        const c: string = s.charAt(i)
        // O(S)
        for(let j = i+1; j < s.length; j++){
            if(s.charAt(j) === c){
                return false
            }
        }
    }
    return true
}

// Time: O(S log s)
// Space: O(1)
export const isUniqueSortFirst = (s: string) => {
    // O(S log s)
    s = s.split('').sort().join('')
    // O(S)
    for(let i = 0; i < s.length - 1; i++){
        if(s.charAt(i) === s.charAt(i+1)){
            return false
        }
    }
    return true
}