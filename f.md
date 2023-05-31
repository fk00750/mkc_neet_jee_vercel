Refactor the following code so selectedCourse gets course value from Courses and in details varaible the FLD23 gets the value of selectedCourse batch_id value, example if selected course is NEET(UG) then selectedCourseCode should be 409 and FLD19 in details should be 809

    const Courses = [
      {
        "JEE(MAIN+ADVANCE)": "459",
        Batch_Id: 809,
      },
      {
        "NEET(UG)": "460",
        Batch_Id: 809,
      },
      {
        "PRE Foundation (9 and 10)": "467",
        Batch_Id: 809,
      },
      {
        "PRE Foundation (10)": "468",
        Batch_Id: 809,
      },
    ];

    const selectedCourseCode = Courses[selectedCourse];

    const details = {
      CLIENTID: "1",
      FLD1: "1",
      FLD2: "1",
      FLD3: "1",
      FLD9: name,
      FLD16: phoneNumber,
      FLD19: selectedCourseCode,
      FLD23: selectedCourse,
      FLD40: selectedState,
    };