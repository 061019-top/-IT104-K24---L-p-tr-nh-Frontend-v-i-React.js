const student = {
    name: "Dev",
    age: 20,
    listMonHoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }    
    ]
};

function getStudentSummary({ name, age, listMonHoc }) {
    const scores = listMonHoc.map(({ score }) => score);
    const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
    const average = avg.toFixed(2);

    let classification = "";
    if (avg < 5) classification = "-> Học sinh yếu";
    else if (avg < 7) classification = "-> Học sinh trung bình";
    else if (avg < 8.5) classification = "-> Học sinh khá";
    else classification = "-> Học sinh giỏi";

    const minSubject = listMonHoc.reduce((min, cur) => cur.score < min.score ? cur : min);
    const maxSubject = listMonHoc.reduce((max, cur) => cur.score > max.score ? cur : max);

    console.log(`${name} is ${age} years old.
Average score: ${average} ${classification}
Best subject: ${maxSubject.subject} (${maxSubject.score})
Weakest subject: ${minSubject.subject} (${minSubject.score})`);
}

getStudentSummary(student);
