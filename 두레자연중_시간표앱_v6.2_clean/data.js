// 시간표 데이터 — 이 파일만 수정하면 시간표가 바뀝니다.
// pinHash : 접속 암호의 SHA-256 해시값 (hash.html 에서 생성)
const TT_DATA = {
  "school": "두레자연중학교",
  "title": "수업 시간표",
  "semester": "2026학년도 2학기",
  "pinLength": 5,
  "pinHash": "118f3e37bdbb412766f71e712a167464b574e3d79465739ea55c8e15cf6ff14f",
  "days": [
    "월",
    "화",
    "수",
    "목",
    "금"
  ],
  "periods": [
    {
      "name": "1교시",
      "start": "09:10",
      "end": "09:50"
    },
    {
      "name": "2교시",
      "start": "10:00",
      "end": "10:40"
    },
    {
      "name": "3교시",
      "start": "10:50",
      "end": "11:30"
    },
    {
      "name": "4교시",
      "start": "11:40",
      "end": "12:20"
    },
    {
      "name": "점심시간",
      "start": "12:20",
      "end": "13:10",
      "lunch": true
    },
    {
      "name": "5교시",
      "start": "13:10",
      "end": "13:50"
    },
    {
      "name": "6교시",
      "start": "14:00",
      "end": "14:40"
    },
    {
      "name": "7교시",
      "start": "14:50",
      "end": "15:30"
    }
  ],
  "grades": [
    1,
    2,
    3
  ],
  "classes": {
    "1": [
      1,
      2
    ],
    "2": [
      1,
      2
    ],
    "3": [
      1,
      2
    ]
  },
  "subjects": [
    {
      "name": "국어",
      "hours": 4,
      "teachers": {
        "1": "김서연",
        "2": "김서연",
        "3": "박지훈"
      },
      "block": false
    },
    {
      "name": "수학",
      "hours": 4,
      "teachers": {
        "1": "이도윤",
        "2": "이도윤",
        "3": "신우진"
      },
      "block": false
    },
    {
      "name": "영어",
      "hours": 4,
      "teachers": {
        "1": "최하은",
        "2": "최하은",
        "3": "장민서"
      },
      "block": false
    },
    {
      "name": "과학",
      "hours": 3,
      "teachers": {
        "1": "정민재",
        "2": "정민재",
        "3": "정민재"
      },
      "block": true
    },
    {
      "name": "사회",
      "hours": 3,
      "teachers": {
        "1": "한소희",
        "2": "한소희",
        "3": "한소희"
      },
      "block": false
    },
    {
      "name": "역사",
      "hours": 2,
      "teachers": {
        "1": "박지훈",
        "2": "박지훈",
        "3": "박지훈"
      },
      "block": false
    },
    {
      "name": "체육",
      "hours": 3,
      "teachers": {
        "1": "오준서",
        "2": "오준서",
        "3": "오준서"
      },
      "block": false
    },
    {
      "name": "음악",
      "hours": 2,
      "teachers": {
        "1": "윤채원",
        "2": "윤채원",
        "3": "윤채원"
      },
      "block": false
    },
    {
      "name": "미술",
      "hours": 2,
      "teachers": {
        "1": "강나윤",
        "2": "강나윤",
        "3": "강나윤"
      },
      "block": true
    },
    {
      "name": "기술가정",
      "hours": 2,
      "teachers": {
        "1": "임태윤",
        "2": "임태윤",
        "3": "임태윤"
      },
      "block": true
    },
    {
      "name": "정보",
      "hours": 2,
      "teachers": {
        "1": "서지우",
        "2": "서지우",
        "3": "서지우"
      },
      "block": true
    },
    {
      "name": "도덕",
      "hours": 2,
      "teachers": {
        "1": "문예린",
        "2": "문예린",
        "3": "문예린"
      },
      "block": false
    },
    {
      "name": "창의적체험활동",
      "hours": 2,
      "teachers": {
        "1": "김서연",
        "2": "이도윤",
        "3": "신우진"
      },
      "block": false
    }
  ],
  "teachers": [
    "강나윤",
    "김서연",
    "문예린",
    "박지훈",
    "서지우",
    "신우진",
    "오준서",
    "윤채원",
    "이도윤",
    "임태윤",
    "장민서",
    "정민재",
    "최하은",
    "한소희"
  ],
  "timetable": {
    "1-1": {
      "월": [
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        }
      ],
      "화": [
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "김서연"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        }
      ],
      "수": [
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        }
      ],
      "목": [
        {
          "subject": "창의적체험활동",
          "teacher": "김서연"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        }
      ],
      "금": [
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        }
      ]
    },
    "1-2": {
      "월": [
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        }
      ],
      "화": [
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        }
      ],
      "수": [
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        }
      ],
      "목": [
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "김서연"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        }
      ],
      "금": [
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "김서연"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        }
      ]
    },
    "2-1": {
      "월": [
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        }
      ],
      "화": [
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        }
      ],
      "수": [
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "이도윤"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        }
      ],
      "목": [
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        }
      ],
      "금": [
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "이도윤"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        }
      ]
    },
    "2-2": {
      "월": [
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        }
      ],
      "화": [
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        }
      ],
      "수": [
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "이도윤"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        }
      ],
      "목": [
        {
          "subject": "영어",
          "teacher": "최하은"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "이도윤"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        }
      ],
      "금": [
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "수학",
          "teacher": "이도윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "국어",
          "teacher": "김서연"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        }
      ]
    },
    "3-1": {
      "월": [
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "신우진"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        }
      ],
      "화": [
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "영어",
          "teacher": "장민서"
        }
      ],
      "수": [
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        }
      ],
      "목": [
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "영어",
          "teacher": "장민서"
        }
      ],
      "금": [
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "신우진"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        }
      ]
    },
    "3-2": {
      "월": [
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        }
      ],
      "화": [
        {
          "subject": "체육",
          "teacher": "오준서"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        },
        {
          "subject": "기술가정",
          "teacher": "임태윤"
        }
      ],
      "수": [
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "도덕",
          "teacher": "문예린"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        },
        {
          "subject": "역사",
          "teacher": "박지훈"
        },
        {
          "subject": "체육",
          "teacher": "오준서"
        }
      ],
      "목": [
        {
          "subject": "창의적체험활동",
          "teacher": "신우진"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "과학",
          "teacher": "정민재"
        },
        {
          "subject": "수학",
          "teacher": "신우진"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        },
        {
          "subject": "정보",
          "teacher": "서지우"
        }
      ],
      "금": [
        {
          "subject": "영어",
          "teacher": "장민서"
        },
        {
          "subject": "사회",
          "teacher": "한소희"
        },
        {
          "subject": "창의적체험활동",
          "teacher": "신우진"
        },
        {
          "subject": "음악",
          "teacher": "윤채원"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "미술",
          "teacher": "강나윤"
        },
        {
          "subject": "국어",
          "teacher": "박지훈"
        }
      ]
    }
  }
};
