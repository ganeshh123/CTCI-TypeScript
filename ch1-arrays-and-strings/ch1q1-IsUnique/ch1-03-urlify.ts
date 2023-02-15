export const URLify = (s: string[], tL: number): void => {
    let scan: number = tL - 1
    let replace: number = s.length - 1

    while(scan >= 0 ){
        const c: string = s[scan]
        if(c === ' '){
            s[replace] = '0'
            s[replace - 1] = '2'
            s[replace - 2] = '%'
            replace = replace - 3
        }else{
            s[replace] = c
            replace = replace - 1
        }
        scan = scan - 1
    }
}