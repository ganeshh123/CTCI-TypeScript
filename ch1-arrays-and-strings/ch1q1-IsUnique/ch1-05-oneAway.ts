export const oneAway = (s1: string, s2: string): boolean => {
    const s1L: number = s1.length
    const s2L: number = s2.length
    if(Math.abs(s1L - s2L) > 1){
        return false
    }

    let edited: boolean = false
    if(s1L === s2L){
        // REPLACEMENT
        for(let i:number = 0; i < s1L; i++){
            if(s1[i] !== s2[i]){
                if(edited === true){
                    // Already used edit
                    return false
                }
                edited = true
            }
        }
    }else{
        const short: string = s1L < s2L ? s1 : s2
        const long: string = s1L > s2L ? s1 : s2
        let sP: number = 0
        let lP: number = 0
        while(lP < long.length){
            if(short[sP] !== long[lP]){
                if(edited === true){
                    return false
                }
                edited = true
                lP = lP + 1
            }
            sP = sP + 1
            lP = lP + 1
        }
    }
    return true
}