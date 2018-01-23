const app = (() => {
    const fetch = require('node-fetch');
    const STUDENT_DATA = "https://gist.githubusercontent.com/petersondrew/4aa8ae630a283a7b942fb693047fc4d7/raw/7c9d643400449e9cbd51faa3afe63c7c28b1dfa7/students.json";
    var data = [
            {
                "name": "Renee Collingwood",
                "grade": 8,
                "classes": [
                    {
                        "name": "Math",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 90
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 45
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 75
                            }
                        ]
                    },
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Luis Tenney",
                "grade": 7,
                "classes": [
                    {
                        "name": "Math",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 100
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 95
                            }
                        ]
                    },
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Armando Depaola",
                "grade": 6,
                "classes": [
                    {
                        "name": "Math",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 81
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 54
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 73
                            }
                        ]
                    },
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Audry Loudon",
                "grade": 7,
                "classes": [
                    {
                        "name": "Math",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    },
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Shayne Brunell",
                "grade": 9,
                "classes": [
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 54
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 66
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 81
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Woodrow Broadfoot",
                "grade": 6,
                "classes": [
                    {
                        "name": "Math",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 81
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 68
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 55
                            }
                        ]
                    },
                    {
                        "name": "Reading",
                        "tests": [
                            {
                                "date": "2018-01-01T00:00:00.000Z",
                                "grade": 89
                            },
                            {
                                "date": "2018-07-01T00:00:00.000Z",
                                "grade": 76
                            },
                            {
                                "date": "2018-14-01T00:00:00.000Z",
                                "grade": 90
                            }
                        ]
                    }
                ]
            }
        ];

    let students;

    fetch(STUDENT_DATA)
        .then((response) => {
            students = response.json();
            console.log('Students ', students);
            return students;
        }).catch(err => {
            console.log('Err: ', err);
        })

    function Student(name, testsTaken, grade) {
       this.name = name;
       this.testTaken = testsTaken;
       this.grade = grade;
    };

    function answer(students) {
        var finalArray = [];

        Object.keys(students).forEach((key) => {
            finalArray.push(
                new Student(
                    students[key].name,
                    students[key].classes[0].tests.map((student) => {
                        return student.grade
                    }),
                    students[key].classes[0].tests.map((student) => {
                        return student.grade;
                    })
                    .reduce(function(a, b) {
                        return (a + b);
                    })
                )
            )
        });

        return failingStudents(finalArray);

    };


    function failingStudents(student) {
        let failingStudents = [];

        student.map((student) => {
            return student.grade = Math.round(student.grade / student.testTaken.length);
        })

        student.map((student) => {
            delete student.testTaken;

            if (student.grade < 70) {
                failingStudents.push(student);
            }
        })

        failingStudents.map((student) => {
            console.log(`${student.name} - ${student.grade}`);
        })

        return failingStudents;
    };

    return {
        init: (() => {
            answer(data);
        })
    };

})();

app.init();
