export const checkPermutation = (s: string, t: string) : boolean => {
    if(s.length !== t.length){
        return false
    }

    const cM: Map<string, number> = new Map<string, number>()

    for(const c of s){
        const count: number = cM.get(c) ?? 0
        cM.set(c, count + 1)
    }

    for(const c of t){
        const count: number = cM.get(c) ?? 0
        if(count === 0){
            return false
        }
        cM.set(c, count - 1)
    }

    return true
}