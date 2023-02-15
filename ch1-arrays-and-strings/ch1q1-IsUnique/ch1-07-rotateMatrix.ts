export const rotateMatrix = (m: number[][]): void => {
    const n: number = m.length
    if(n < 1 || n!== m[0].length){
        return
    }
    for(let layer: number = 0; layer < n/2; layer++){
        const layerTL: number = layer
        const layerBR: number = n - 1 - layer
        for(let i: number = layerTL; i < layerBR; i++){
            const offset: number = i - layerTL
            const topVal: number = m[layerTL][i]
            // Left to Top
            m[layerTL][i] = m[layerBR - offset][layerTL]
            // Bottom to Left
            m[layerBR - offset][layerTL] = m[layerBR][layerBR - offset]
            // Right to Bottom
            m[layerBR][layerBR - offset] = m[i][layerBR]
            // Top to Right
            m[i][layerBR] = topVal
        }
    }
}