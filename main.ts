namespace score {
    /**
     *  making a score and change. E.g. 23
     */
    //% block
    //% group="Score Change"
    export function changeScore(scoreOpened: boolean, changeScore: number): void {
        
        if (scoreOpened) {
            
            info.changeScoreBy(changeScore)
        } else {
            
            info.setScore(0)
        }
    }
    /**
     *  clear the score (turn to 0)
     */
    //% block
    //% group="Reset Score"
    export function resetScore(): void {

        info.setScore(0)
    }
}
