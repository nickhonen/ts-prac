type Rating = 1 | 2 | 3

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    target: number
    averageTime: number,
    rating: number,
    ratingExplanation: string,
}

const calculateExercises = (dailyHours: number[], target: number): Result => {
    if (dailyHours.length !== 7) throw new Error('Needs to be 7 arguments!')
    const totalHours: number = dailyHours.reduce((acc, curr) => acc + curr, 0)
    
    return {
        periodLength: 7,
        trainingDays: dailyHours.filter(n => n > 0).length,
        success: totalHours / 7 < target ? false : true,
        target: target,
        rating: 1 || 2 || 3,
        ratingExplanation: "it's completely random lol",
        averageTime: totalHours / 7,
    }
}
console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 1.5))