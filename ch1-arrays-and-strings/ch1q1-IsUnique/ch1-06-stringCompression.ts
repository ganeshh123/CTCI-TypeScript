export const stringCompression = (s: string): string => {
    const sL: number = s.length
    const c: string[] = new Array<string>(s.length)
    let count: number = 0
    let ins: number = 0
    let scan: number = 0

    while(scan < sL){
        count = count + 1
        if(scan === sL - 1 || s.charAt(scan) !== s.charAt(scan + 1)){
            if(ins + 1 >= sL - 1){
                return s
            }
            c[ins] = s.charAt(scan)
            c[ins + 1] = `${count}`
            ins = ins + 2
            count = 0
        }
        scan = scan + 1
    }

    return c.join('')
}
