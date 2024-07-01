export const calculateBmi = (height: number, weight: number) => {
    // height is expected in cm, weight in kilograms
    const meters: number = height / 100
    const bmi: number = weight / (meters ** 2)
    let printText: string = `your BMI is outside of the normal range, and it is ${bmi}`
    if (bmi >= 18.5 && bmi <= 24.9) {
        printText = `Your BMI is in the normal range, and it is ${bmi}`
    }
    return printText
}

const h: number = Number(process.argv[2])
const w: number = Number(process.argv[3])

calculateBmi(h, w)
