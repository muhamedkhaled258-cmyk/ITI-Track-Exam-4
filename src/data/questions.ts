export interface Question {
  id: number;
  question: string;
  question_type: "text" | "code" | "sql";
  options: string[];
  correct_answer: number;
  explanation: {
    text_points: string[];
    code_blocks?: string[];
  };
  image?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following is the correct syntax to define a function in C++?",
    question_type: "text",
    options: [
      "function int sum(int a, int b) {}",
      "int sum(int a, int b) {}",
      "def sum(a, b):",
      "int sum = (int a, int b) {}"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الخيار الصحيح هو int sum(int a, int b) {}",
        "يجب تحديد نوع الإرجاع (return type) قبل اسم الدالة",
        "الخيار الأول يستخدم كلمة function وهي غير صحيحة في C++",
        "الخيار الثالث هو صيغة Python وليست C++"
      ]
    }
  },
  {
    id: 2,
    question: "What is the return type of a function that does not return any value?",
    question_type: "text",
    options: ["void", "int", "char", "null"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "الكلمة المفتاحية void تُستخدم للدوال التي لا تُرجع قيمة",
        "كلمة null غير موجودة كنوع بيانات في C++",
        "int و char هما أنواع بيانات تُرجع قيمة"
      ]
    }
  },
  {
    id: 3,
    question: `int add(int a, int b) { return a + b; }
int main() {
    printf("%d", add(2, 3));
    return 0;
}`,
    question_type: "code",
    options: ["23", "5", "2", "Compilation Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الدالة add تجمع a و b",
        "عند استدعاء add(2, 3) النتيجة هي 2 + 3 = 5",
        "printf تطبع القيمة 5"
      ],
      code_blocks: ["// Output: 5"]
    }
  },
  {
    id: 4,
    question: "Which of the following is not a valid function call in C++?",
    question_type: "text",
    options: ["sum(5, 10);", "sum();", "sum(, 5);", "sum(a, b);"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "الخيار sum(, 5); غير صحيح لأنه يحتوي على فاصلة بدون معامل أول",
        "يجب أن تحتوي كل استدعاء دالة على معاملات صحيحة أو لا شيء",
        "الخيارات الأخرى صحيحة بناءً على تعريف الدالة"
      ]
    }
  },
  {
    id: 5,
    question: `Procedure Test(x)
    x = x + 5
    Print x
EndProcedure
Call Test(10)`,
    question_type: "code",
    options: ["5", "10", "15", "Error"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "يتم استدعاء Test(10) حيث x = 10",
        "داخل الدالة: x = 10 + 5 = 15",
        "النتيجة المطبوعة هي 15"
      ]
    }
  },
  {
    id: 6,
    question: `SET i = 0
REPEAT
    PRINT i
    SET i = i + 1
UNTIL i = 3`,
    question_type: "code",
    options: ["For loop", "While loop", "Repeat-until loop", "None"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "هذا هو Repeat-until loop",
        "يتم تنفيذ الحلقة مرة واحدة على الأقل قبل فحص الشرط",
        "تتوقف الحلقة عندما i = 3"
      ]
    }
  },
  {
    id: 7,
    question: `SET sum = 0
FOR i = 1 TO 3
    sum = sum + i
ENDFOR
PRINT sum`,
    question_type: "code",
    options: ["3", "6", "5", "0"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الحلقة تكرر من 1 إلى 3",
        "sum = 0 + 1 + 2 + 3 = 6",
        "النتيجة المطبوعة هي 6"
      ]
    }
  },
  {
    id: 8,
    question: "Which keyword is used to stop a loop in pseudocode?",
    question_type: "text",
    options: ["END", "EXIT", "BREAK", "STOP"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "كلمة BREAK تُستخدم لإيقاف الحلقة فوراً",
        "END تُستخدم لإنهاء كتلة كود وليس لإيقاف الحلقة",
        "EXIT و STOP ليست كلمات مفتاحية قياسية في معظم اللغات"
      ]
    }
  },
  {
    id: 9,
    question: `SET n = 2
WHILE n < 10
    n = n * 2
ENDWHILE
PRINT n`,
    question_type: "code",
    options: ["8", "10", "12", "16"],
    correct_answer: 3,
    explanation: {
      text_points: [
        "التكرار الأول: n = 2 * 2 = 4",
        "التكرار الثاني: n = 4 * 2 = 8",
        "التكرار الثالث: n = 8 * 2 = 16",
        "الآن n = 16 وهو أكبر من 10، فتتوقف الحلقة",
        "النتيجة المطبوعة هي 16"
      ]
    }
  },
  {
    id: 10,
    question: "Which of the following is the correct pseudocode to check if x is even?",
    question_type: "text",
    options: [
      "IF x % 2 = 0 THEN PRINT \"Even\"",
      "IF x / 2 = 0 THEN PRINT \"Even\"",
      "IF x MOD 2 = 1 THEN PRINT \"Even\"",
      "None of the above"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "العملية % (modulus) تعطي باقي القسمة",
        "إذا كان x % 2 = 0 فإن العدد زوجي",
        "الخيار الثاني يفحص إذا كان x / 2 = 0 وهو شرط خاطئ",
        "الخيار الثالث يفحص إذا كان الباقي 1 (أي فردي)"
      ]
    }
  },
  {
    id: 11,
    question: `FOR i = 1 TO 5
    IF i = 3 THEN BREAK
    PRINT i
ENDFOR`,
    question_type: "code",
    options: ["1 2 3 4 5", "1 2", "1 2 3", "3 4 5"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الحلقة تطبع i في كل دورة",
        "عندما i = 1: تطبع 1",
        "عندما i = 2: تطبع 2",
        "عندما i = 3: يتم تنفيذ BREAK وتتوقف الحلقة",
        "النتيجة: 1 2"
      ]
    }
  },
  {
    id: 12,
    question: "Which of these is used to repeat a block of pseudocode a fixed number of times?",
    question_type: "text",
    options: ["WHILE", "FOR", "REPEAT", "IF"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "حلقة FOR تُستخدم للتكرار عدد محدد من المرات",
        "WHILE تستمر طالما الشرط صحيح (عدد غير محدد)",
        "REPEAT-UNTIL مشابهة لـ WHILE",
        "IF ليست حلقة، بل بنية شرطية"
      ]
    }
  },
  {
    id: 13,
    question: `SET x = 0
WHILE x <= 5
    PRINT x
    x = x + 2
ENDWHILE`,
    question_type: "code",
    options: ["0 1 2 3 4 5", "0 2 4", "0 2 4 6", "2 4 6"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "التكرار الأول: x = 0، طباعة 0، ثم x = 2",
        "التكرار الثاني: x = 2، طباعة 2، ثم x = 4",
        "التكرار الثالث: x = 4، طباعة 4، ثم x = 6",
        "الآن x = 6 وهو أكبر من 5، فتتوقف الحلقة",
        "النتيجة: 0 2 4 6"
      ]
    }
  },
  {
    id: 14,
    question: "Which of the following is used for multiple selection in pseudocode?",
    question_type: "text",
    options: ["IF-ELSE", "CASE", "FOR", "WHILE"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "CASE (أو SWITCH) تُستخدم لاختيار متعدد",
        "IF-ELSE تُستخدم لشرطين فقط",
        "FOR و WHILE هي حلقات وليست بنى اختيار"
      ]
    }
  },
  {
    id: 15,
    question: `SET i = 1
FOR i = 1 TO 3
    PRINT i * i
ENDFOR`,
    question_type: "code",
    options: ["1 4 9", "1 2 3", "2 4 6", "3 6 9"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "عندما i = 1: تطبع 1 * 1 = 1",
        "عندما i = 2: تطبع 2 * 2 = 4",
        "عندما i = 3: تطبع 3 * 3 = 9",
        "النتيجة: 1 4 9"
      ]
    }
  },
  {
    id: 16,
    question: "Which pseudocode statement is used to end the program?",
    question_type: "text",
    options: ["STOP", "EXIT", "END", "QUIT"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "STOP تُستخدم لإنهاء البرنامج",
        "END تُستخدم لإنهاء كتلة كود",
        "EXIT تُستخدم للخروج من حلقة أو دالة",
        "QUIT ليست كلمة مفتاحية قياسية"
      ]
    }
  },
  {
    id: 17,
    question: `SET n = 5
IF n < 0 THEN
    PRINT "Negative"
ELSE IF n = 0 THEN
    PRINT "Zero"
ELSE
    PRINT "Positive"
ENDIF`,
    question_type: "code",
    options: ["Negative", "Zero", "Positive", "None"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "n = 5، وهو أكبر من 0",
        "الشرط الأول (n < 0) خاطئ",
        "الشرط الثاني (n = 0) خاطئ",
        "يتم تنفيذ ELSE: طباعة Positive"
      ]
    }
  },
  {
    id: 18,
    question: "Which loop structure is correct?",
    question_type: "text",
    options: [
      "FOR i = 0 TO 5 STEP 1",
      "REPEAT i = 0 TO 5",
      "WHILE i < 5 STEP 1",
      "ENDWHILE i = 5"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "الصيغة الصحيحة لحلقة FOR هي: FOR i = 0 TO 5 STEP 1",
        "STEP تحدد مقدار الزيادة في كل تكرار",
        "الخيارات الأخرى تحتوي على صيغ خاطئة"
      ]
    }
  },
  {
    id: 19,
    question: `SET a = 1
SET b = 1
PRINT a + b`,
    question_type: "code",
    options: ["1", "2", "3", "0"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "a = 1 و b = 1",
        "a + b = 1 + 1 = 2",
        "النتيجة المطبوعة هي 2"
      ]
    }
  },
  {
    id: 20,
    question: "Which of the following is the correct way to check multiple conditions?",
    question_type: "text",
    options: [
      "IF cond1 AND cond2 THEN …",
      "IF cond1 OR cond2 THEN …",
      "Both A and B",
      "None of the above"
    ],
    correct_answer: 2,
    explanation: {
      text_points: [
        "AND تُستخدم عندما يجب أن تكون جميع الشروط صحيحة",
        "OR تُستخدم عندما يجب أن يكون شرط واحد على الأقل صحيحاً",
        "كلا الخيارين صحيحان ويستخدمان حسب الحاجة"
      ]
    }
  },
  {
    id: 21,
    question: `SET count = 3
WHILE count > 0
    PRINT count
    count = count - 1
ENDWHILE`,
    question_type: "code",
    options: ["1 2 3", "3 2 1", "0 1 2", "Infinite loop"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "التكرار الأول: count = 3، طباعة 3، ثم count = 2",
        "التكرار الثاني: count = 2، طباعة 2، ثم count = 1",
        "التكرار الثالث: count = 1، طباعة 1، ثم count = 0",
        "الآن count = 0 فتتوقف الحلقة",
        "النتيجة: 3 2 1"
      ]
    }
  },
  {
    id: 22,
    question: "Which keyword is used to skip the current iteration in a loop?",
    question_type: "text",
    options: ["STOP", "CONTINUE", "BREAK", "SKIP"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "CONTINUE تتخطى التكرار الحالي وتنتقل للتكرار التالي",
        "BREAK تُوقف الحلقة تماماً",
        "STOP تُنهي البرنامج",
        "SKIP ليست كلمة مفتاحية قياسية"
      ]
    }
  },
  {
    id: 23,
    question: `SET arr[5] = {1, 2, 3, 4, 5}
PRINT arr[2]`,
    question_type: "code",
    options: ["1", "2", "3", "Error"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "المصفوفات في معظم اللغات تبدأ من الفهرس 0",
        "arr[0] = 1، arr[1] = 2، arr[2] = 3",
        "النتيجة المطبوعة هي 3"
      ]
    }
  },
  {
    id: 24,
    question: "Which statement is used for input in pseudocode?",
    question_type: "text",
    options: ["READ", "INPUT", "GET", "All of the above"],
    correct_answer: 3,
    explanation: {
      text_points: [
        "جميع الكلمات READ و INPUT و GET تُستخدم للإدخال في pseudocode",
        "لا توجد صيغة قياسية موحدة للـ pseudocode",
        "يمكن استخدام أي منها بناءً على التفضيل"
      ]
    }
  },
  {
    id: 25,
    question: `SET x = 10
SET y = 3
PRINT x DIV y`,
    question_type: "code",
    options: ["3.33", "3", "4", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "DIV تعني القسمة الصحيحة (integer division)",
        "10 ÷ 3 = 3.33... ولكن DIV تعطي فقط الجزء الصحيح",
        "النتيجة: 3"
      ]
    }
  },
  {
    id: 26,
    question: "Which is the correct way to declare an array in pseudocode?",
    question_type: "text",
    options: [
      "SET arr[5]",
      "DECLARE arr[5]",
      "arr[5] = {1,2,3,4,5}",
      "All of the above"
    ],
    correct_answer: 3,
    explanation: {
      text_points: [
        "جميع الطرق صحيحة في pseudocode",
        "لا توجد صيغة قياسية موحدة",
        "المهم أن تكون واضحة ومفهومة"
      ]
    }
  },
  {
    id: 27,
    question: `SET max = 0
FOR i = 1 TO 5
    IF arr[i] > max THEN max = arr[i]
ENDFOR`,
    question_type: "code",
    options: ["Finds minimum", "Finds maximum", "Finds sum", "Finds average"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الخوارزمية تبحث عن أكبر قيمة في المصفوفة",
        "في كل تكرار، إذا كان arr[i] أكبر من max، يتم تحديث max",
        "في النهاية، max يحتوي على أكبر قيمة"
      ]
    }
  },
  {
    id: 28,
    question: `SET temp = a
SET a = b
SET b = temp`,
    question_type: "code",
    options: [
      "Adds two numbers",
      "Swaps two variables",
      "Multiplies variables",
      "Compares variables"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "هذا هو الكود القياسي لتبديل قيمتين",
        "نحفظ قيمة a في temp",
        "نضع قيمة b في a",
        "نضع القيمة المحفوظة (temp) في b"
      ]
    }
  },
  {
    id: 29,
    question: `SET factorial = 1
FOR i = 1 TO 5
    factorial = factorial * i
ENDFOR
PRINT factorial`,
    question_type: "code",
    options: ["5", "15", "120", "25"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "حساب المضروب (factorial) للعدد 5",
        "5! = 1 × 2 × 3 × 4 × 5 = 120",
        "النتيجة: 120"
      ]
    }
  },
  {
    id: 30,
    question: "Which loop executes the condition at the end?",
    question_type: "text",
    options: ["FOR", "WHILE", "REPEAT-UNTIL loop", "IF"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "حلقة REPEAT-UNTIL تفحص الشرط في النهاية",
        "هذا يضمن تنفيذ الحلقة مرة واحدة على الأقل",
        "WHILE و FOR يفحصان الشرط في البداية"
      ]
    }
  },
  {
    id: 31,
    question: `SET str = "Hello"
PRINT LENGTH(str)`,
    question_type: "code",
    options: ["4", "5", "6", "Hello"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "دالة LENGTH تعطي عدد الأحرف في النص",
        "النص \"Hello\" يحتوي على 5 أحرف",
        "النتيجة: 5"
      ]
    }
  },
  {
    id: 32,
    question: "Which function is used to find the remainder in pseudocode?",
    question_type: "text",
    options: ["MOD", "REM", "%", "All of the above"],
    correct_answer: 3,
    explanation: {
      text_points: [
        "جميع الرموز MOD و REM و % تُستخدم لحساب الباقي",
        "MOD شائع في pseudocode",
        "% شائع في C/C++/Java",
        "REM يُستخدم في بعض اللغات مثل BASIC"
      ]
    }
  },
  {
    id: 33,
    question: `FOR i = 1 TO 2
    FOR j = 1 TO 2
        PRINT i * j
    ENDFOR
ENDFOR`,
    question_type: "code",
    options: ["1 2 2 4", "1 1 2 2", "2 4 6 8", "1 2 3 4"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "عندما i=1, j=1: طباعة 1×1=1",
        "عندما i=1, j=2: طباعة 1×2=2",
        "عندما i=2, j=1: طباعة 2×1=2",
        "عندما i=2, j=2: طباعة 2×2=4",
        "النتيجة: 1 2 2 4"
      ]
    }
  },
  {
    id: 34,
    question: `FOR i = 0 TO n-2
    FOR j = 0 TO n-2-i
        IF arr[j] > arr[j+1] THEN SWAP arr[j] and arr[j+1]
    ENDIF
ENDFOR
ENDFOR`,
    question_type: "code",
    options: ["Linear search", "Bubble sort", "Binary search", "Selection sort"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "هذه خوارزمية Bubble Sort",
        "تقوم بمقارنة العناصر المتجاورة وتبديلها إذا كانت في الترتيب الخاطئ",
        "تكرر العملية حتى يتم ترتيب المصفوفة"
      ]
    }
  },
  {
    id: 35,
    question: `SET num = 153
SET sum = 0
WHILE num > 0
    digit = num MOD 10
    sum = sum + digit^3
    num = num DIV 10
ENDWHILE
PRINT sum`,
    question_type: "code",
    options: ["153", "371", "9", "27"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "الكود يحسب مجموع مكعبات الأرقام",
        "153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153",
        "هذا يسمى Armstrong number",
        "النتيجة: 153"
      ]
    }
  },
  {
    id: 36,
    question: "Which statement is correct for function definition in pseudocode?",
    question_type: "text",
    options: [
      "FUNCTION f()",
      "DEF f()",
      "BEGIN FUNCTION f()",
      "All of the above"
    ],
    correct_answer: 3,
    explanation: {
      text_points: [
        "جميع الصيغ مقبولة في pseudocode",
        "لا توجد صيغة قياسية موحدة",
        "المهم أن تكون واضحة ومفهومة"
      ]
    }
  },
  {
    id: 37,
    question: `SET isPrime = TRUE
FOR i = 2 TO num/2
    IF num MOD i = 0 THEN
        isPrime = FALSE
        BREAK
    ENDIF
ENDFOR`,
    question_type: "code",
    options: ["Even number", "Odd number", "Prime number", "Perfect number"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "الكود يفحص إذا كان العدد أولياً (prime)",
        "يحاول تقسيم num على جميع الأعداد من 2 إلى num/2",
        "إذا وجد قاسم، فالعدد ليس أولياً"
      ]
    }
  },
  {
    id: 38,
    question: `SET result = 1
SET base = 2
SET power = 3
FOR i = 1 TO power
    result = result * base
ENDFOR`,
    question_type: "code",
    options: ["6", "8", "9", "12"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الكود يحسب 2³ (2 أس 3)",
        "التكرار الأول: result = 1 × 2 = 2",
        "التكرار الثاني: result = 2 × 2 = 4",
        "التكرار الثالث: result = 4 × 2 = 8",
        "النتيجة: 8"
      ]
    }
  },
  {
    id: 39,
    question: `SET found = FALSE
FOR i = 0 TO n-1
    IF arr[i] = target THEN
        found = TRUE
        BREAK
    ENDIF
ENDFOR`,
    question_type: "code",
    options: ["Binary search", "Linear search", "Hash search", "Tree search"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "هذه خوارزمية Linear Search",
        "تبحث في المصفوفة عنصراً تلو الآخر",
        "تتوقف عند إيجاد العنصر المطلوب",
        "Binary search يتطلب مصفوفة مرتبة وخوارزمية مختلفة"
      ]
    }
  },
  {
    id: 40,
    question: `SET a = 0, b = 1
FOR i = 1 TO 5
    PRINT a
    temp = a + b
    a = b
    b = temp
ENDFOR`,
    question_type: "code",
    options: ["0 1 1 2 3", "1 1 2 3 5", "0 1 2 3 4", "1 2 3 4 5"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "هذا كود لطباعة أول 5 أعداد من متسلسلة Fibonacci",
        "i=1: طباعة 0، a=1, b=1",
        "i=2: طباعة 1، a=1, b=2",
        "i=3: طباعة 1، a=2, b=3",
        "i=4: طباعة 2، a=3, b=5",
        "i=5: طباعة 3",
        "النتيجة: 0 1 1 2 3"
      ]
    }
  },
  {
    id: 41,
    question: `SET gcd = a
SET temp = b
WHILE temp != 0
    remainder = gcd MOD temp
    gcd = temp
    temp = remainder
ENDWHILE`,
    question_type: "code",
    options: ["LCM", "GCD", "Sum", "Product"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "هذه خوارزمية Euclidean لحساب GCD (القاسم المشترك الأكبر)",
        "تستخدم عملية المودولو بشكل متكرر",
        "تتوقف عندما temp = 0"
      ]
    }
  },
  {
    id: 42,
    question: "Which of the following is true about recursive functions?",
    question_type: "text",
    options: [
      "Cannot call themselves",
      "Must have a base case",
      "Never need a return value",
      "Always use loops"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الدوال التكرارية يجب أن تحتوي على base case",
        "Base case يمنع التكرار اللانهائي",
        "الدالة التكرارية تستدعي نفسها",
        "يمكن أن تُرجع قيمة أو لا"
      ]
    }
  },
  {
    id: 43,
    question: "What is the purpose of a return statement in a function?",
    question_type: "text",
    options: [
      "To stop execution of main",
      "To return a value to the calling function",
      "To print a value",
      "To declare a variable"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "return تُرجع قيمة للدالة المستدعية",
        "توقف تنفيذ الدالة الحالية فقط، وليس main",
        "لا تطبع القيمة، بل تُرجعها"
      ]
    }
  },
  {
    id: 44,
    question: `Procedure CountDown(n)
    IF n > 0 THEN
        Print n
        Call CountDown(n - 1)
    ENDIF
EndProcedure
Call CountDown(3)`,
    question_type: "code",
    options: ["3 2 1", "1 2 3", "0 1 2", "Infinite loop"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "دالة تكرارية تطبع الأعداد بشكل تنازلي",
        "CountDown(3): طباعة 3، ثم استدعاء CountDown(2)",
        "CountDown(2): طباعة 2، ثم استدعاء CountDown(1)",
        "CountDown(1): طباعة 1، ثم استدعاء CountDown(0)",
        "CountDown(0): الشرط خاطئ، فتتوقف",
        "النتيجة: 3 2 1"
      ]
    }
  },
  {
    id: 45,
    question: "Which of the following is pass by reference in C++?",
    question_type: "text",
    options: [
      "void swap(int a, int b)",
      "void swap(int &a, int &b)",
      "int swap(int a, int b)",
      "int swap(int a, int b&)"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "الرمز & يشير إلى pass by reference",
        "void swap(int &a, int &b) هو الصيغة الصحيحة",
        "في pass by reference، يتم تمرير عنوان المتغير",
        "أي تغيير على المعاملات يؤثر على المتغيرات الأصلية"
      ]
    }
  },
  {
    id: 46,
    question: `void fun() {
    static int x = 0;
    x++;
    printf("%d ", x);
}
int main() {
    fun(); fun(); fun();
    return 0;
}`,
    question_type: "code",
    options: ["1 1 1", "1 2 3", "0 0 0", "Compilation Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "المتغير x معرّف بـ static",
        "static تعني أن المتغير يحتفظ بقيمته بين استدعاءات الدالة",
        "الاستدعاء الأول: x=0، ثم x++، طباعة 1",
        "الاستدعاء الثاني: x=1، ثم x++، طباعة 2",
        "الاستدعاء الثالث: x=2، ثم x++، طباعة 3",
        "النتيجة: 1 2 3"
      ],
      code_blocks: ["// Output: 1 2 3"]
    }
  },
  {
    id: 47,
    question: "Which pseudo code statement declares a function without defining it?",
    question_type: "text",
    options: [
      "Function Sum(a, b) {}",
      "Declare Function Sum(a, b)",
      "Call Sum(5, 10)",
      "Print Sum"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "Declare Function Sum(a, b) تعلن عن الدالة فقط",
        "الخيار الأول يعرّف الدالة (التعريف يتضمن الجسم)",
        "الخيار الثالث يستدعي الدالة",
        "الخيار الرابع يطبع اسم الدالة"
      ]
    }
  },
  {
    id: 48,
    question: "Which of the following cannot be a function name in C++?",
    question_type: "text",
    options: ["Sum", "main", "3DPrint", "calculate"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "أسماء الدوال لا يمكن أن تبدأ برقم",
        "3DPrint يبدأ برقم 3 لذلك غير صحيح",
        "main هو اسم خاص ولكن يمكن تعريف دوال أخرى باسم main في بعض السياقات",
        "Sum و calculate أسماء صحيحة"
      ]
    }
  },
  {
    id: 49,
    question: `Procedure Example(a)
    a = a * 2
EndProcedure
x = 5
Call Example(x)
Print x`,
    question_type: "code",
    options: ["5", "10", "Error", "0"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "هذا مثال على pass by value",
        "داخل الدالة، a نسخة من x",
        "تغيير a لا يؤثر على x",
        "النتيجة المطبوعة: 5"
      ]
    }
  },
  {
    id: 50,
    question: "Which of the following correctly represents a procedure in pseudo code?",
    question_type: "text",
    options: [
      "Procedure Sum(a, b)",
      "Function Sum(a, b) Returns int",
      "Call Sum(a, b)",
      "Print Sum(a, b)"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "Procedure Sum(a, b) هي الصيغة الصحيحة لتعريف procedure",
        "الخيار الثاني يعرّف function وليس procedure",
        "الخيار الثالث يستدعي procedure",
        "الخيار الرابع يطبع ناتج procedure"
      ]
    }
  },
  {
    id: 51,
    question: "Which of the following is a feature of functions?",
    question_type: "text",
    options: [
      "Reusability",
      "Modularity",
      "Debugging ease",
      "All of the above"
    ],
    correct_answer: 3,
    explanation: {
      text_points: [
        "الدوال توفر إعادة الاستخدام (Reusability)",
        "تدعم البرمجة المعيارية (Modularity)",
        "تسهل عملية التصحيح (Debugging)",
        "جميع الخيارات صحيحة"
      ]
    }
  },
  {
    id: 52,
    question: "Which of the following best describes a parameter?",
    question_type: "text",
    options: [
      "A variable passed to a function",
      "A function name",
      "A value returned by a function",
      "A type of loop"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "المعامل (parameter) هو متغير يُمرر للدالة",
        "يُستخدم لنقل البيانات للدالة",
        "يختلف عن القيمة المُرجعة (return value)"
      ]
    }
  },
  {
    id: 53,
    question: `void fun(int a=5) { std::cout << a; }
int main() {
    fun();
    fun(10);
    return 0;
}`,
    question_type: "code",
    options: ["510", "15", "105", "55"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "a=5 هي قيمة افتراضية (default parameter)",
        "fun() بدون معامل: تستخدم القيمة الافتراضية 5",
        "fun(10) مع معامل: تستخدم القيمة 10",
        "النتيجة: 510"
      ],
      code_blocks: ["// Output: 510"]
    }
  },
  {
    id: 54,
    question: "What is the main difference between a function and a procedure in pseudo code?",
    question_type: "text",
    options: [
      "Function returns a value, procedure does not",
      "Procedure returns a value, function does not",
      "Functions cannot be called",
      "Procedures are only for loops"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "Function تُرجع قيمة (return value)",
        "Procedure لا تُرجع قيمة",
        "كلاهما يمكن استدعاؤهما",
        "Procedure تُستخدم لتنفيذ مهمة بدون إرجاع نتيجة"
      ]
    }
  },
  {
    id: 55,
    question: "Which statement is true about local variables?",
    question_type: "text",
    options: [
      "Exist only inside the function where declared",
      "Exist globally",
      "Can be accessed outside the function",
      "Cannot be used inside functions"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "المتغيرات المحلية تُعرّف داخل الدالة",
        "تُحذف تلقائياً عند انتهاء الدالة",
        "لا يمكن الوصول إليها من خارج الدالة",
        "لها نطاق محدود (local scope)"
      ]
    }
  },
  {
    id: 56,
    question: "Which statement is true about global variables?",
    question_type: "text",
    options: [
      "Exist for the whole program",
      "Only exist in main",
      "Cannot be used in functions",
      "Are automatically constants"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "المتغيرات العامة موجودة طوال فترة تشغيل البرنامج",
        "يمكن الوصول إليها من أي دالة",
        "ليست ثوابت افتراضياً",
        "لها نطاق عام (global scope)"
      ]
    }
  },
  {
    id: 57,
    question: `Procedure Sum(a, b)
    Return a + b
EndProcedure
x = Call Sum(2, 3)
Print x`,
    question_type: "code",
    options: ["2", "3", "5", "Error"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "على الرغم من أنها procedure، فإنها تُرجع قيمة",
        "Sum(2, 3) تُرجع 2 + 3 = 5",
        "x يُخزن القيمة 5",
        "النتيجة المطبوعة: 5"
      ]
    }
  },
  {
    id: 58,
    question: "Which of these is a valid recursive factorial function in pseudo code?",
    question_type: "text",
    options: [
      "Procedure Fact(n) If n=0 Then Return 1 Else Return n*Fact(n-1)",
      "Procedure Fact(n) Print n",
      "Procedure Fact(n) Return n+n",
      "Procedure Fact(n) Return 1"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "دالة المضروب التكرارية تحتاج إلى base case",
        "عندما n=0، تُرجع 1 (base case)",
        "وإلا تُرجع n * Fact(n-1) (recursive case)",
        "الخيارات الأخرى غير صحيحة"
      ]
    }
  },
  {
    id: 59,
    question: `#include<stdio.h>
int square(int n) {
    return n*n;
}
int main() {
    printf("%d", square(4));
    return 0;
}`,
    question_type: "code",
    options: ["8", "16", "4", "0"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "دالة square تُرجع مربع العدد",
        "square(4) تُرجع 4 × 4 = 16",
        "printf تطبع 16"
      ],
      code_blocks: ["// Output: 16"]
    }
  },
  {
    id: 60,
    question: "Which of the following best describes a pseudo code?",
    question_type: "text",
    options: [
      "A programming language",
      "A high-level description of an algorithm",
      "Hardware",
      "Compiler"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "Pseudocode هو وصف عالي المستوى للخوارزمية",
        "ليس لغة برمجة حقيقية",
        "يُستخدم للتخطيط قبل كتابة الكود الفعلي",
        "لا يعتمد على صيغة محددة"
      ]
    }
  },
  {
    id: 61,
    question: "In pseudo code, which of the following is used to stop a loop?",
    question_type: "text",
    options: ["Break", "Exit", "StopLoop", "Continue"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "Break تُستخدم لإيقاف الحلقة",
        "Exit تُستخدم للخروج من البرنامج أو الدالة",
        "Continue تتخطى التكرار الحالي",
        "StopLoop ليست كلمة مفتاحية قياسية"
      ]
    }
  },
  {
    id: 62,
    question: "Which function type always returns a value?",
    question_type: "text",
    options: ["Procedure", "Function", "Main", "Void"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "Function دائماً تُرجع قيمة",
        "Procedure لا تُرجع قيمة",
        "Void تشير إلى عدم إرجاع قيمة",
        "Main يمكن أن تُرجع قيمة (عادة 0)"
      ]
    }
  },
  {
    id: 63,
    question: `Procedure Swap(a, b)
    temp = a
    a = b
    b = temp
EndProcedure
x = 5
y = 10
Call Swap(x, y)
Print x, y`,
    question_type: "code",
    options: ["10 5", "5 10", "0 0", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "هذا مثال على pass by value",
        "التبديل يحدث على نسخ محلية من x و y",
        "القيم الأصلية لا تتغير",
        "النتيجة: 5 10"
      ]
    }
  },
  {
    id: 64,
    question: "Which of these pseudo code statements calls a function?",
    question_type: "text",
    options: [
      "Call Sum(5, 10)",
      "Function Sum(a, b)",
      "Procedure Sum(a, b)",
      "Declare Sum(a, b)"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "Call Sum(5, 10) تستدعي الدالة",
        "الخيارات الأخرى تعرّف أو تعلن عن الدالة",
        "Call أو اسم الدالة مباشرة يُستخدم للاستدعاء"
      ]
    }
  },
  {
    id: 65,
    question: "Which of the following is not correct about recursive functions?",
    question_type: "text",
    options: [
      "Must have a base case",
      "Can call themselves",
      "Always faster than loops",
      "Can consume stack memory"
    ],
    correct_answer: 2,
    explanation: {
      text_points: [
        "الدوال التكرارية ليست دائماً أسرع من الحلقات",
        "في الواقع، غالباً ما تكون أبطأ وتستهلك ذاكرة أكثر",
        "الميزة الرئيسية هي البساطة والوضوح في بعض الحالات",
        "يجب أن تحتوي على base case وتستدعي نفسها"
      ]
    }
  },
  {
    id: 66,
    question: "Which of the following best describes modular programming?",
    question_type: "text",
    options: [
      "Breaking programs into functions/procedures",
      "Writing all code in main",
      "Using only global variables",
      "Avoiding functions"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "البرمجة المعيارية تعني تقسيم البرنامج إلى دوال ووحدات صغيرة",
        "كل وحدة تؤدي مهمة محددة",
        "يسهل الصيانة والاختبار وإعادة الاستخدام",
        "الخيارات الأخرى ممارسات سيئة"
      ]
    }
  },
  {
    id: 67,
    question: `int x = 5; printf("%d", x++);`,
    question_type: "code",
    options: ["6", "5", "Error", "Undefined"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "x++ هو post-increment",
        "يُطبع القيمة الحالية أولاً، ثم يزيد",
        "printf تطبع 5",
        "بعد ذلك x يصبح 6"
      ],
      code_blocks: ["// Output: 5\n// x becomes 6 after"]
    }
  },
  {
    id: 68,
    question: "Which of the following is a correct for loop syntax in C?",
    question_type: "text",
    options: [
      "for(int i=0; i<5; i++) {}",
      "for i=0; i<5; i++ {}",
      "for(int i=0; i<5; i++); {}",
      "loop (i=0; i<5; i++) {}"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "الصيغة الصحيحة: for(int i=0; i<5; i++) {}",
        "يجب وضع الأقواس حول الشروط الثلاثة",
        "الفاصلة المنقوطة بعد القوس تُنهي الحلقة فوراً",
        "loop ليست كلمة مفتاحية في C"
      ]
    }
  },
  {
    id: 69,
    question: "Which data type is used to store decimal numbers in C?",
    question_type: "text",
    options: ["int", "float", "char", "long"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "float يُستخدم للأعداد العشرية",
        "int للأعداد الصحيحة فقط",
        "char للأحرف",
        "long للأعداد الصحيحة الكبيرة"
      ]
    }
  },
  {
    id: 70,
    question: "What is the correct syntax to declare a character variable in C?",
    question_type: "text",
    options: ["char c;", "character c;", "string c;", "char = c;"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "char c; هي الصيغة الصحيحة",
        "character ليست نوع بيانات في C",
        "string ليست نوع بيانات أساسي في C (تُستخدم مصفوفة char)",
        "char = c; صيغة خاطئة"
      ]
    }
  },
  {
    id: 71,
    question: `int a = 3, b = 4; printf("%d", a * b);`,
    question_type: "code",
    options: ["7", "12", "34", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "a = 3، b = 4",
        "a × b = 3 × 4 = 12",
        "printf تطبع 12"
      ],
      code_blocks: ["// Output: 12"]
    }
  },
  {
    id: 72,
    question: "Which loop is guaranteed to execute at least once?",
    question_type: "text",
    options: ["for", "while", "do-while", "foreach"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "do-while تُنفذ الكود مرة واحدة على الأقل",
        "تفحص الشرط بعد التنفيذ",
        "for و while يفحصان الشرط أولاً",
        "foreach غير موجودة في C"
      ]
    }
  },
  {
    id: 73,
    question: `int a = 10;
if(a > 5) printf("Yes");
else printf("No");`,
    question_type: "code",
    options: ["Yes", "No", "Error", "None"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "a = 10 وهو أكبر من 5",
        "الشرط a > 5 صحيح",
        "يتم تنفيذ printf(\"Yes\")"
      ],
      code_blocks: ["// Output: Yes"]
    }
  },
  {
    id: 74,
    question: "Which operator is used to compare two values in C?",
    question_type: "text",
    options: ["=", "==", "|=", ":="],
    correct_answer: 1,
    explanation: {
      text_points: [
        "== تُستخدم للمقارنة",
        "= تُستخدم للإسناد (assignment)",
        "|= عملية OR بت مع إسناد",
        ":= ليست موجودة في C"
      ]
    }
  },
  {
    id: 75,
    question: `int x = 0;
while(x < 3) { printf("%d ", x); x++; }`,
    question_type: "code",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Infinite loop"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "x = 0: طباعة 0، x = 1",
        "x = 1: طباعة 1، x = 2",
        "x = 2: طباعة 2، x = 3",
        "x = 3 ليس أقل من 3، فتتوقف الحلقة",
        "النتيجة: 0 1 2"
      ],
      code_blocks: ["// Output: 0 1 2"]
    }
  },
  {
    id: 76,
    question: "Which of the following is NOT a loop in C?",
    question_type: "text",
    options: ["for", "while", "repeat", "do-while"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "repeat ليست حلقة في C",
        "for، while، do-while هي الحلقات المتاحة",
        "repeat موجودة في لغات أخرى مثل Pascal"
      ]
    }
  },
  {
    id: 77,
    question: `int i;
for(i = 1; i <= 3; i++) printf("%d ", i);`,
    question_type: "code",
    options: ["1 2 3", "0 1 2", "1 2 3 4", "0 1 2 3"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "i تبدأ من 1",
        "الحلقة تستمر حتى i <= 3",
        "i = 1: طباعة 1",
        "i = 2: طباعة 2",
        "i = 3: طباعة 3",
        "النتيجة: 1 2 3"
      ],
      code_blocks: ["// Output: 1 2 3"]
    }
  },
  {
    id: 78,
    question: "Which of the following is a valid variable name in C?",
    question_type: "text",
    options: ["1value", "_value", "value-1", "int"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "_value صحيح (يمكن أن يبدأ بـ _)",
        "1value خطأ (لا يمكن أن يبدأ برقم)",
        "value-1 خطأ (لا يمكن استخدام -)",
        "int خطأ (كلمة محجوزة)"
      ]
    }
  },
  {
    id: 79,
    question: `int a = 5; printf("%d", ++a);`,
    question_type: "code",
    options: ["4", "5", "6", "Error"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "++a هو pre-increment",
        "يزيد القيمة أولاً، ثم يطبعها",
        "a يصبح 6 أولاً",
        "ثم printf تطبع 6"
      ],
      code_blocks: ["// Output: 6"]
    }
  },
  {
    id: 80,
    question: "Which format specifier is used for float in printf?",
    question_type: "text",
    options: ["%d", "%f", "%c", "%s"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "%f تُستخدم لطباعة float",
        "%d للأعداد الصحيحة (int)",
        "%c للأحرف (char)",
        "%s للنصوص (string)"
      ]
    }
  },
  {
    id: 81,
    question: "Which is the smallest data type in C?",
    question_type: "text",
    options: ["int", "char", "float", "short"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "char هو الأصغر (1 byte)",
        "short عادة 2 bytes",
        "int عادة 4 bytes",
        "float عادة 4 bytes"
      ]
    }
  },
  {
    id: 82,
    question: "Which of these is a logical operator in C?",
    question_type: "text",
    options: ["&&", "=", "||", "Both A and C"],
    correct_answer: 3,
    explanation: {
      text_points: [
        "&& (AND) و || (OR) هما عوامل منطقية",
        "= عامل إسناد",
        "العوامل المنطقية تُستخدم لربط الشروط"
      ]
    }
  },
  {
    id: 83,
    question: `int a = 5, b = 2; printf("%d", a / b);`,
    question_type: "code",
    options: ["2.5", "2", "3", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "كلا المتغيرين int",
        "القسمة الصحيحة: 5 ÷ 2 = 2 (بدون كسر)",
        "النتيجة: 2"
      ],
      code_blocks: ["// Output: 2\n// Not 2.5 because both are int"]
    }
  },
  {
    id: 84,
    question: "What is the correct way to write a comment in C?",
    question_type: "text",
    options: ["// comment", "/* comment */", "Both A and B", "# comment"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "// تعليق على سطر واحد",
        "/* ... */ تعليق متعدد الأسطر",
        "كلاهما صحيح في C",
        "# تُستخدم في Python، ليس C"
      ]
    }
  },
  {
    id: 85,
    question: "Which keyword is used to exit from a loop in C?",
    question_type: "text",
    options: ["exit", "stop", "break", "return"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "break تُستخدم للخروج من الحلقة",
        "exit تُنهي البرنامج بالكامل",
        "return تُرجع من الدالة",
        "stop ليست كلمة مفتاحية في C"
      ]
    }
  },
  {
    id: 86,
    question: `int x = 10;
if(x == 10) { printf("Equal"); }
else { printf("Not Equal"); }`,
    question_type: "code",
    options: ["Equal", "Not Equal", "Error", "None"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "x = 10",
        "الشرط x == 10 صحيح",
        "يتم تنفيذ printf(\"Equal\")"
      ],
      code_blocks: ["// Output: Equal"]
    }
  },
  {
    id: 87,
    question: "What is the size of int data type in a 32-bit system?",
    question_type: "text",
    options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "في معظم الأنظمة 32-bit، int يأخذ 4 bytes",
        "في الأنظمة 16-bit القديمة، كان 2 bytes",
        "في الأنظمة 64-bit، لا يزال عادة 4 bytes"
      ]
    }
  },
  {
    id: 88,
    question: "Which header file is required for printf function?",
    question_type: "text",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "stdio.h يحتوي على دوال الإدخال والإخراج",
        "printf و scanf موجودة في stdio.h",
        "stdlib.h للدوال العامة مثل malloc",
        "string.h لدوال النصوص",
        "math.h للدوال الرياضية"
      ]
    }
  },
  {
    id: 89,
    question: `int arr[5] = {1, 2, 3};
printf("%d", arr[4]);`,
    question_type: "code",
    options: ["3", "0", "Garbage value", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "المصفوفة تحتوي على 5 عناصر",
        "تم تهيئة أول 3 عناصر: 1, 2, 3",
        "العناصر المتبقية (arr[3] و arr[4]) تُهيأ بـ 0",
        "النتيجة: 0"
      ],
      code_blocks: ["// arr[0]=1, arr[1]=2, arr[2]=3, arr[3]=0, arr[4]=0"]
    }
  },
  {
    id: 90,
    question: "Which is the correct syntax for pointer declaration?",
    question_type: "text",
    options: ["int*ptr;", "int ptr;", "pointer int ptr;", "int& ptr;"],
    correct_answer: 0,
    explanation: {
      text_points: [
        "int *ptr; أو int* ptr; كلاهما صحيح",
        "* تشير إلى أن ptr مؤشر",
        "int ptr; متغير عادي، ليس مؤشر",
        "& تُستخدم لـ reference في C++"
      ]
    }
  },
  {
    id: 91,
    question: "What does the & operator do?",
    question_type: "text",
    options: [
      "Bitwise AND",
      "Address of operator",
      "Dereference operator",
      "Modulus"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "& يعطي عنوان المتغير (address of)",
        "&& هو Bitwise AND",
        "* هو Dereference operator",
        "% هو Modulus"
      ]
    }
  },
  {
    id: 92,
    question: `int x = 5;
int *p = &x;
printf("%d", *p);`,
    question_type: "code",
    options: ["Address of x", "5", "Error", "Undefined"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "p يحتوي على عنوان x",
        "*p يُرجع القيمة الموجودة في ذلك العنوان",
        "*p = 5",
        "printf تطبع 5"
      ],
      code_blocks: ["// Output: 5"]
    }
  },
  {
    id: 93,
    question: "Which function is used to allocate memory dynamically?",
    question_type: "text",
    options: ["alloc()", "malloc()", "new()", "calloc()"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "malloc() تُستخدم لتخصيص الذاكرة ديناميكياً",
        "calloc() أيضاً تُستخدم (تُهيئ الذاكرة بـ 0)",
        "alloc() ليست دالة قياسية في C",
        "new() تُستخدم في C++"
      ]
    }
  },
  {
    id: 94,
    question: "What is the correct syntax for string declaration?",
    question_type: "text",
    options: [
      "string s;",
      "char s[10];",
      "char s[] = \"Hello\";",
      "Both B and C"
    ],
    correct_answer: 3,
    explanation: {
      text_points: [
        "في C، النصوص هي مصفوفات char",
        "char s[10]; تُعلن مصفوفة بحجم 10",
        "char s[] = \"Hello\"; تُعلن وتُهيئ",
        "string s; تُستخدم في C++ (std::string)"
      ]
    }
  },
  {
    id: 95,
    question: `char str[] = "Hello";
printf("%d", strlen(str));`,
    question_type: "code",
    options: ["4", "5", "6", "Error"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "strlen() تُرجع طول النص",
        "\"Hello\" يحتوي على 5 أحرف",
        "لا تحسب null terminator (\\0)",
        "النتيجة: 5"
      ],
      code_blocks: ["// Output: 5\n// strlen does not count null terminator"]
    }
  },
  {
    id: 96,
    question: "Which is the correct way to define a function?",
    question_type: "text",
    options: ["function add() {}", "int add() {}", "def add() {}", "void add;"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "int add() {} هي الصيغة الصحيحة في C",
        "function غير موجودة في C",
        "def تُستخدم في Python",
        "void add; تعلن عن متغير، ليس دالة"
      ]
    }
  },
  {
    id: 97,
    question: "What does the return statement do?",
    question_type: "text",
    options: [
      "Ends function execution",
      "Returns a value",
      "Both A and B",
      "Exits the program"
    ],
    correct_answer: 2,
    explanation: {
      text_points: [
        "return تُنهي تنفيذ الدالة",
        "تُرجع قيمة للدالة المستدعية",
        "لا تُنهي البرنامج، فقط الدالة الحالية"
      ]
    }
  },
  {
    id: 98,
    question: "What is the scope of a local variable?",
    question_type: "text",
    options: [
      "Whole program",
      "Within the function only",
      "Global",
      "Until manually deleted"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "المتغيرات المحلية موجودة داخل الدالة فقط",
        "تُحذف تلقائياً عند انتهاء الدالة",
        "لا يمكن الوصول إليها من خارج الدالة"
      ]
    }
  },
  {
    id: 99,
    question: "Which operator has the highest precedence?",
    question_type: "text",
    options: ["*", "++", "()", "&&"],
    correct_answer: 2,
    explanation: {
      text_points: [
        "الأقواس () لها أعلى أولوية",
        "تُنفذ أولاً قبل أي عملية أخرى",
        "ثم ++، ثم *، ثم &&"
      ]
    }
  },
  {
    id: 100,
    question: `int a = 10, b = 5;
printf("%d", a % b);`,
    question_type: "code",
    options: ["2", "0", "5", "10"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "% تعطي باقي القسمة",
        "10 ÷ 5 = 2 والباقي 0",
        "النتيجة: 0"
      ],
      code_blocks: ["// Output: 0\n// 10 is divisible by 5 with no remainder"]
    }
  },
  {
    id: 101,
    question: "Which is the correct way to include multiple conditions?",
    question_type: "text",
    options: [
      "if(a > 0 && b > 0)",
      "if(a > 0, b > 0)",
      "if(a > 0 and b > 0)",
      "if(a > 0 or b > 0)"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "if(a > 0 && b > 0) هي الصيغة الصحيحة",
        "&& تعني AND المنطقي",
        "and و or تُستخدم في Python، ليس C",
        "الفاصلة , تُنفذ العمليات بالتتابع لكنها ليست عامل منطقي"
      ]
    }
  },
  {
    id: 102,
    question: "What does the continue statement do?",
    question_type: "text",
    options: [
      "Exits loop",
      "Skips current iteration",
      "Ends program",
      "Repeats loop"
    ],
    correct_answer: 1,
    explanation: {
      text_points: [
        "continue تتخطى التكرار الحالي",
        "تنتقل مباشرة للتكرار التالي",
        "break تُوقف الحلقة تماماً",
        "return تُنهي الدالة"
      ]
    }
  },
  {
    id: 103,
    question: "Which is the correct syntax for switch statement?",
    question_type: "text",
    options: [
      "switch(var) { case 1: ... }",
      "switch { var: case 1: }",
      "switch(var) [ case 1: ... ]",
      "select(var) { case 1: ... }"
    ],
    correct_answer: 0,
    explanation: {
      text_points: [
        "switch(var) { case 1: ... } هي الصيغة الصحيحة",
        "يجب استخدام {} وليس []",
        "select ليست كلمة مفتاحية في C"
      ]
    }
  },
  {
    id: 104,
    question: "What is the default value of uninitialized global variables?",
    question_type: "text",
    options: ["Garbage value", "0", "NULL", "Undefined"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "المتغيرات العامة غير المُهيأة تأخذ القيمة 0 تلقائياً",
        "المتغيرات المحلية غير المُهيأة تحتوي على قيم عشوائية",
        "هذا سلوك قياسي في C"
      ]
    }
  },
  {
    id: 105,
    question: "Which function is used to convert string to integer?",
    question_type: "text",
    options: ["itoa()", "atoi()", "toint()", "strtoint()"],
    correct_answer: 1,
    explanation: {
      text_points: [
        "atoi() تُحول النص إلى عدد صحيح",
        "atoi = ASCII to integer",
        "itoa() تُحول عدد صحيح إلى نص",
        "toint() و strtoint() غير موجودة"
      ]
    }
  },
  {
    id: 106,
    question: `int x = 5;
printf("%d %d", x++, ++x);`,
    question_type: "code",
    options: ["5 7", "6 7", "5 6", "Undefined behavior"],
    correct_answer: 3,
    explanation: {
      text_points: [
        "تعديل x أكثر من مرة في نفس التعبير هو undefined behavior",
        "ترتيب التقييم غير محدد",
        "النتيجة قد تختلف بين المترجمات",
        "يجب تجنب هذا النوع من الكود"
      ],
      code_blocks: ["// Undefined behavior - avoid this pattern"]
    }
  }
];
