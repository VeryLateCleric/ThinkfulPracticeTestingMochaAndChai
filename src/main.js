function averageScore(student) {
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
    return Number((totalScore / students.length).toFixed(1));
}