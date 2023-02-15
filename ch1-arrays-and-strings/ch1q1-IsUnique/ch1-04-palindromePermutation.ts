export const palindromePermutation = (s: string): boolean => {
    const cM: Map<string, boolean> = new Map<string, boolean>()
    for(const character of s){
        const c = character.toLowerCase()
        if(c === character.toUpperCase()){
            continue
        }
        if(cM.has(c) && cM.get(c) === true){
            cM.set(c, false)
        }else{
            cM.set(c, true)
        }
    }

    let oddFound: boolean = false
    for(const [key, value] of cM.entries()){
        console.log(key, value)
        if(value === true){
            if(s.toLowerCase().replace(/[^a-z]/g, '').length % 2 === 0 || oddFound === true){
                return false
            }
            oddFound = true
        }
    }

    return true
}