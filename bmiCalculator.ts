const calculateBmi = (height: number, weight: number) => {
    const meters: number = height / 100
    const bmi: number = weight / (meters ** 2)
    let printText: string = "your BMI is outside of the normal range"
    if (bmi >= 18.5 && bmi <= 24.9) {
        printText = `Your BMI is in the normal range, and it is ${bmi}`
    }
    console.log(printText)
}

const h: number = Number(process.argv[2])
const w: number = Number(process.argv[3])

calculateBmi(h, w)