const mongoose = require('mongoose');
require('dotenv').config();

const Question = require('./models/Question');

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern_coding_practice';

async function run() {
  try {
    await mongoose.connect(mongoUri);

    console.log('Connected to MongoDB, seeding questions...');

    const questionsToInsert = [
    {
        "title": "Sum of sum-series of first N Natural numbers",
        "url": "https://www.geeksforgeeks.org/dsa/sum-of-sum-series-of-first-n-natural-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-series2811/1?page=1&difficulty=School&sortBy=submissions",
        "order": 1
    },
    {
        "title": "Check for Binary",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-a-number-is-binary-or-not-in-java/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/check-for-binary/1?page=1&difficulty=School&sortBy=submissions",
        "order": 2
    },
    {
        "title": "if-else (Decision Making)",
        "url": "https://www.geeksforgeeks.org/cpp/decision-making-c-cpp/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/check-for-binary/1?page=1&difficulty=School&sortBy=submissions",
        "order": 3
    },
    {
        "title": "Odd or Even",
        "url": "https://www.geeksforgeeks.org/dsa/check-whether-given-number-even-odd/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/odd-or-even3618/1?page=2&difficulty=School&sortBy=submissions",
        "order": 4
    },
    {
        "title": "Swap two numbers",
        "url": "https://www.geeksforgeeks.org/c/c-program-swap-two-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1?page=2&difficulty=School&sortBy=submissions",
        "order": 5
    },
    {
        "title": "Sum Of Digits",
        "url": "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1?page=3&difficulty=School&sortBy=submissions",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1?page=3&difficulty=School&sortBy=submissions",
        "order": 6
    },
    {
        "title": "Sum of elements in a matrix",
        "url": "https://www.geeksforgeeks.org/dsa/find-sum-of-all-matrix-elements/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-elements-in-a-matrix2000/1?page=3&difficulty=School&sortBy=submissions",
        "order": 7
    },
    {
        "title": "Vowel or Not",
        "url": "https://www.geeksforgeeks.org/dsa/program-find-character-vowel-consonant/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/vowel-or-not0831/1?page=3&difficulty=School&sortBy=submissions",
        "order": 8
    },
    {
        "title": "Greatest of three numbers",
        "url": "https://www.geeksforgeeks.org/c/c-program-to-find-the-largest-number-among-three-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/greatest-of-three-numbers2520/1?page=4&difficulty=School&sortBy=submissions",
        "order": 9
    },
    {
        "title": "Lower case to upper case",
        "url": "https://www.geeksforgeeks.org/dsa/lower-case-upper-case-interesting-fact/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/lower-case-to-upper-case3410/1?page=4&difficulty=School&sortBy=submissions",
        "order": 10
    },
    {
        "title": "Binary representation",
        "url": "https://www.geeksforgeeks.org/dsa/binary-representation-of-a-given-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/binary-representation5003/1?page=4&difficulty=School&sortBy=submissions",
        "order": 11
    },
    {
        "title": "Multiply Array",
        "url": "https://www.geeksforgeeks.org/dsa/program-multiplication-array-elements/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/multiply-array-1658312632/1?page=5&difficulty=School&sortBy=submissions",
        "order": 12
    },
    {
        "title": "Sum of odd and even elements",
        "url": "https://www.geeksforgeeks.org/dsa/sum-even-odd-elements-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-odd-and-even-elements3033/1?page=5&difficulty=School&sortBy=submissions",
        "order": 13
    },
    {
        "title": "Program to print the diamond shape",
        "url": "https://www.geeksforgeeks.org/dsa/program-print-diamond-shape/",
        "practiceUrl": "",
        "order": 14
    },
    {
        "title": "Program to print the half diamond shape pattern",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-print-half-diamond-star-pattern/",
        "practiceUrl": "",
        "order": 15
    },
    {
        "title": "Print alternate elements of an array",
        "url": "https://www.geeksforgeeks.org/dsa/print-alternate-elements-of-an-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&difficulty=School&sortBy=submissions",
        "order": 16
    },
    {
        "title": "Count Digits",
        "url": "https://www.geeksforgeeks.org/dsa/program-count-digits-integer-3-different-methods/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/count-digits5716/1?page=1&difficulty=School&sortBy=submissions",
        "order": 17
    },
    {
        "title": "Palindromic Array",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-check-if-an-array-is-palindrome-or-not/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1?page=1&difficulty=School&sortBy=submissions",
        "order": 18
    },
    {
        "title": "Find the median",
        "url": "https://www.geeksforgeeks.org/dsa/mean-and-median-of-an-unsorted-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-the-median0527/1?page=1&difficulty=School&sortBy=submissions",
        "order": 19
    },
    {
        "title": "Armstrong Numbers",
        "url": "https://www.geeksforgeeks.org/dsa/program-for-armstrong-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/program-for-armstrong-numbers/",
        "order": 20
    },
    {
        "title": "Reverse digits",
        "url": "https://www.geeksforgeeks.org/dsa/write-a-program-to-reverse-digits-of-a-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/reverse-digit0316/1?page=1&difficulty=School&sortBy=submissions",
        "order": 21
    },
    {
        "title": "Remove Spaces",
        "url": "https://www.geeksforgeeks.org/dsa/c-program-remove-spaces-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/c-program-remove-spaces-string/",
        "order": 22
    },
    {
        "title": "Sum of Digit is Pallindrome or not",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-the-sum-of-digits-of-n-is-palindrome/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1?page=2&difficulty=School&sortBy=submissions",
        "order": 23
    },
    {
        "title": "Perfect Arrays",
        "url": "https://www.geeksforgeeks.org/dsa/check-whether-given-array-perfect-not/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/perfect-arrays4645/1?page=2&difficulty=School&sortBy=submissions",
        "order": 24
    },
    {
        "title": "Multiplication Table",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-print-multiplication-table-of-a-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/print-table0303/1?page=2&difficulty=School&sortBy=submissions",
        "order": 25
    },
    {
        "title": "Reversing the vowels",
        "url": "https://www.geeksforgeeks.org/dsa/reverse-vowels-given-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/reversing-the-vowels5304/1?page=3&difficulty=School&sortBy=submissions",
        "order": 26
    },
    {
        "title": "The dice problem",
        "url": "https://www.geeksforgeeks.org/dsa/the-dice-problem/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/the-dice-problem2316/1?page=3&difficulty=School&sortBy=submissions",
        "order": 27
    },
    {
        "title": "Remove vowels from string",
        "url": "https://www.geeksforgeeks.org/dsa/program-remove-vowels-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/remove-vowels-from-string1446/1?page=3&difficulty=School&sortBy=submissions",
        "order": 28
    },
    {
        "title": "Count of camel case characters",
        "url": "https://www.geeksforgeeks.org/dsa/count-of-camel-case-characters-present-in-a-given-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-the-camel3348/1?page=3&difficulty=School&sortBy=submissions",
        "order": 29
    },
    {
        "title": "Remainder Evaluation",
        "url": "https://www.geeksforgeeks.org/computer-science-fundamentals/remainder-evaluation/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/remainder-evaluation3755/1?page=3&difficulty=School&sortBy=submissions",
        "order": 30
    },
    {
        "title": "Convert a list of characters into a String",
        "url": "https://www.geeksforgeeks.org/java/convert-list-of-characters-to-string-in-java/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/convert-a-list-of-characters-into-a-string5142/1?page=4&difficulty=School&sortBy=submissions",
        "order": 31
    },
    {
        "title": "Count type of Characters",
        "url": "https://www.geeksforgeeks.org/dsa/count-the-number-of-unique-characters-in-a-given-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/count-type-of-characters3635/1?page=4&difficulty=School&sortBy=submissions",
        "order": 32
    },
    {
        "title": "Find n-th term of series 1, 3, 6, 10, 15, 21",
        "url": "https://www.geeksforgeeks.org/dsa/find-nth-term-series-136101521/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-n-th-term-of-series-1-3-6-10-15-215506/1?page=4&difficulty=School&sortBy=submissions",
        "order": 33
    },
    {
        "title": "Simple Interest",
        "url": "https://www.geeksforgeeks.org/c/c-program-for-simple-interest/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/simple-interest3457/1?page=4&difficulty=School&sortBy=submissions",
        "order": 34
    },
    {
        "title": "Number of divisors",
        "url": "https://www.geeksforgeeks.org/dsa/total-number-divisors-given-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/number-of-divisors1631/1?page=4&difficulty=School&sortBy=submissions",
        "order": 35
    },
    {
        "title": "Mean",
        "url": "https://www.geeksforgeeks.org/dsa/mean-and-median-of-an-unsorted-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/mean-and-median-of-an-unsorted-array/",
        "order": 36
    },
    {
        "title": "Sum of AP series",
        "url": "https://www.geeksforgeeks.org/dsa/program-sum-arithmetic-series/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/program-sum-arithmetic-series/",
        "order": 37
    },
    {
        "title": "Small Factorial",
        "url": "https://www.geeksforgeeks.org/dsa/program-for-factorial-of-a-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/small-factorial0854/1?page=5&difficulty=School&sortBy=submissions",
        "order": 38
    },
    {
        "title": "Distance between 2 points",
        "url": "https://www.geeksforgeeks.org/dsa/program-calculate-distance-two-points/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/distance-between-2-points3200/1?page=5&difficulty=School&sortBy=submissions",
        "order": 39
    },
    {
        "title": "Sum of GP",
        "url": "https://www.geeksforgeeks.org/dsa/program-sum-geometric-series/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/sum-of-gp2120/1?page=5&difficulty=School&sortBy=submissions",
        "order": 40
    },
    {
        "title": "Extract the integers",
        "url": "https://www.geeksforgeeks.org/dsa/extract-all-integers-from-a-given-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/extract-all-integers-from-a-given-string/",
        "order": 41
    },
    {
        "title": "Display longest name",
        "url": "https://www.geeksforgeeks.org/dsa/display-the-longest-name/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/display-longest-name0853/1?page=2&difficulty=School&sortBy=submissions",
        "order": 42
    },
    {
        "title": "Surface Area and Volume of Cuboid",
        "url": "https://www.geeksforgeeks.org/dsa/program-for-volume-and-surface-area-of-cuboid/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/program-for-volume-and-surface-area-of-cuboid/",
        "order": 43
    },
    {
        "title": "Floyd's triangle",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-print-floyds-triangle/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/floyds-triangle1222/1?page=5&difficulty=School&sortBy=submissions",
        "order": 44
    },
    {
        "title": "Cube root of a number",
        "url": "https://www.geeksforgeeks.org/python/python-program-for-find-cubic-root-of-a-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/cube-root-of-a-number0915/1?page=6&difficulty=School&sortBy=submissions",
        "order": 45
    },
    {
        "title": "Identical Matrices",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-check-if-two-given-matrices-are-identical/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/identical-matrices1042/1?page=6&difficulty=School&sortBy=submissions",
        "order": 46
    },
    {
        "title": "Diagonal sum",
        "url": "https://www.geeksforgeeks.org/dsa/efficiently-compute-sums-of-diagonals-of-a-matrix/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/diagonal-sum0158/1?page=6&difficulty=School&sortBy=submissions",
        "order": 47
    },
    {
        "title": "Automorphic Number",
        "url": "https://www.geeksforgeeks.org/dsa/automorphic-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/automorphic-number4721/1?page=6&difficulty=School&sortBy=submissions",
        "order": 48
    },
    {
        "title": "Find difference between sum of diagonals",
        "url": "https://www.geeksforgeeks.org/dsa/find-difference-between-sums-of-two-diagonals/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-difference-between-sum-of-diagonals1554/1?page=6&difficulty=School&sortBy=submissions",
        "order": 49
    },
    {
        "title": "Number of Diagonals",
        "url": "https://www.geeksforgeeks.org/dsa/find-number-diagonals-n-sided-convex-polygon/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/number-of-diagonals1020/1?page=6&difficulty=School&sortBy=submissions",
        "order": 50
    },
    {
        "title": "Toeplitz matrix",
        "url": "https://www.geeksforgeeks.org/dsa/find-if-given-matrix-is-toeplitz-or-not/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/toeplitz-matrix/1?page=6&difficulty=School&sortBy=submissions",
        "order": 51
    },
    {
        "title": "Number Pattern",
        "url": "https://www.geeksforgeeks.org/computer-science-fundamentals/basic-programming-problems/Number%20Pattern",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/number-pattern0517/1?page=7&difficulty=School&sortBy=submissions",
        "order": 52
    },
    {
        "title": "Second Largest",
        "url": "https://www.geeksforgeeks.org/dsa/find-second-largest-element-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/second-largest3735/1?page=1&difficulty=Basic&sortBy=submissions",
        "order": 53
    },
    {
        "title": "Third largest element",
        "url": "https://www.geeksforgeeks.org/dsa/third-largest-element-array-distinct-elements/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/third-largest-element/1?page=2&difficulty=Basic&sortBy=submissions",
        "order": 54
    },
    {
        "title": "Maximum Occuring Character",
        "url": "https://www.geeksforgeeks.org/dsa/return-maximum-occurring-character-in-the-input-string-3/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1?page=3&difficulty=Basic&sortBy=submissions",
        "order": 55
    },
    {
        "title": "Uncommon characters",
        "url": "https://www.geeksforgeeks.org/dsa/find-uncommon-characters-two-strings/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/uncommon-characters4932/1?page=3&difficulty=Basic&sortBy=submissions",
        "order": 56
    },
    {
        "title": "Remove Consecutive Characters",
        "url": "https://www.geeksforgeeks.org/dsa/remove-consecutive-duplicates-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/consecutive-elements2306/1?page=3&difficulty=Basic&sortBy=submissions",
        "order": 57
    },
    {
        "title": "Replace all 0's with 5",
        "url": "https://www.geeksforgeeks.org/dsa/replace-0-5-input-integer/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/replace-all-0s-with-5/1?page=3&difficulty=Basic&sortBy=submissions",
        "order": 58
    },
    {
        "title": "Exceptionally odd",
        "url": "https://www.geeksforgeeks.org/dsa/find-the-number-occurring-odd-number-of-times/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-the-odd-occurence4820/1?page=3&difficulty=Basic&sortBy=submissions",
        "order": 59
    },
    {
        "title": "Repeated Character",
        "url": "https://www.geeksforgeeks.org/dsa/find-the-first-repeated-character-in-a-string/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/find-the-first-repeated-character-in-a-string/",
        "order": 60
    },
    {
        "title": "Number is sparse or not",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-a-given-number-is-sparse-or-not/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-given-number-is-sparse-or-not/",
        "order": 61
    },
    {
        "title": "Leap Year",
        "url": "https://www.geeksforgeeks.org/dsa/program-check-given-year-leap-year/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/leap-year0943/1?page=5&difficulty=Basic&sortBy=submissions",
        "order": 62
    },
    {
        "title": "Pattern 1",
        "url": "https://www.geeksforgeeks.org/computer-science-fundamentals/program-to-print-solid-and-hollow-square-patterns/",
        "practiceUrl": "https://www.geeksforgeeks.org/computer-science-fundamentals/program-to-print-solid-and-hollow-square-patterns/",
        "order": 63
    },
    {
        "title": "Pattern 2",
        "url": "https://www.geeksforgeeks.org/java/java-program-to-print-right-triangle-star-pattern/",
        "practiceUrl": "",
        "order": 64
    },
    {
        "title": "Maximum product of two numbers",
        "url": "https://www.geeksforgeeks.org/dsa/return-a-pair-with-maximum-product-in-array-of-integers/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/return-a-pair-with-maximum-product-in-array-of-integers/",
        "order": 65
    },
    {
        "title": "Check if a number is power of another number",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-a-number-is-power-of-another-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/dsa/check-if-a-number-is-power-of-another-number/",
        "order": 66
    },
    {
        "title": "Merge two strings",
        "url": "https://www.geeksforgeeks.org/dsa/alternatively-merge-two-strings-in-java/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/merge-two-strings2736/1?page=6&difficulty=Basic&sortBy=submissions",
        "order": 67
    },
    {
        "title": "Doubling the value",
        "url": "https://www.geeksforgeeks.org/dsa/repeatedly-search-element-doubling-every-successful-search/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/doubling-the-value4859/1?page=7&difficulty=Basic&sortBy=submissions",
        "order": 68
    },
    {
        "title": "Find all factorial numbers less than or equal to N",
        "url": "https://www.geeksforgeeks.org/dsa/find-factorial-numbers-less-equal-n/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/1?page=7&difficulty=Basic&sortBy=submissions",
        "order": 69
    },
    {
        "title": "Average in a stream",
        "url": "https://www.geeksforgeeks.org/dsa/average-of-a-stream-of-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/average4856/1?amp%3Butm_campaign=article_practice_tab&utm_source=geeksforgeeks&%3Butm_medium=ml_article_practice_tab",
        "order": 70
    },
    {
        "title": "Square root of a number",
        "url": "https://www.geeksforgeeks.org/dsa/square-root-of-an-integer/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/square-root/1?page=3&difficulty=Easy&sortBy=submissions",
        "order": 71
    },
    {
        "title": "Intersection of two arrays",
        "url": "https://www.geeksforgeeks.org/dsa/find-union-and-intersection-of-two-unsorted-arrays/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1?page=3&difficulty=Easy&sortBy=submissions",
        "order": 72
    },
    {
        "title": "Union of Two Sorted Arrays",
        "url": "https://www.geeksforgeeks.org/dsa/union-and-intersection-of-two-sorted-arrays-2/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1?page=3&difficulty=Easy&sortBy=submissions",
        "order": 73
    },
    {
        "title": "Check if array is sorted",
        "url": "https://www.geeksforgeeks.org/dsa/program-check-array-sorted-not-iterative-recursive/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1?page=1&category=Arrays&difficulty=Easy&sortBy=submissions",
        "order": 74
    },
    {
        "title": "GCD of two numbers",
        "url": "https://www.geeksforgeeks.org/dsa/program-to-find-gcd-or-hcf-of-two-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1?page=2&difficulty=School&sortBy=submissions",
        "order": 75
    },
    {
        "title": "Fascinating Number",
        "url": "https://www.geeksforgeeks.org/dsa/fascinating-number/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/fascinating-number3751/1?page=3&difficulty=School&sortBy=submissions",
        "order": 76
    },
    {
        "title": "Game with nos",
        "url": "https://www.geeksforgeeks.org/dsa/find-array-whose-elements-are-xor-of-adjacent-elements-in-given-array/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/game-with-nos3123/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions",
        "order": 77
    },
    {
        "title": "Perfect Square",
        "url": "https://www.geeksforgeeks.org/dsa/check-if-given-number-is-perfect-square-in-cpp/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/check-perfect-square2503/1?amp%3Butm_campaign=article_practice_tab&utm_source=geeksforgeeks&%3Butm_medium=ml_article_practice_tab",
        "order": 78
    },
    {
        "title": "Prime Number",
        "url": "https://www.geeksforgeeks.org/maths/prime-numbers/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/prime-number2314/1?amp%3Butm_campaign=article_practice_tab&utm_source=geeksforgeeks&%3Butm_medium=ml_article_practice_tab",
        "order": 79
    },
    {
        "title": "Minimum Difference among K",
        "url": "https://www.geeksforgeeks.org/dsa/k-numbers-difference-maximum-minimum-k-number-minimized/",
        "practiceUrl": "https://www.geeksforgeeks.org/problems/minimum-difference-among-k5805/1?page=4&category=Arrays&difficulty=Basic&sortBy=submissions",
        "order": 80
    }
];

    if (!questionsToInsert.length) {
      console.log('No questions defined yet. Edit seed.js and add items to questionsToInsert.');
      process.exit(0);
    }

    // Optional: clear existing questions before inserting
    await Question.deleteMany({});

    await Question.insertMany(questionsToInsert);
    console.log(`Inserted ${questionsToInsert.length} questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

run();
