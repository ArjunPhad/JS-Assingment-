// console.clear();

// // Question 1:
// // Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// // For example,
// // Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// // Output: 3
// // Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// // Output: [0, 5]
// // Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// // Output: -1


// console.log("Q1 END =====================")


// // Question 2:
// // Write a program to print following pattern in the console.
// // 54321
// // 5432
// // 543
// // 54
// // 5

// console.log("Q2 END =====================")


// // Question 3:
// // Write a JavaScript program to sort an array in ascending order
// // For example,
// // Input: [3, 2, 1, 4, 5, 45]
// // Output: [1, 2, 3, 4, 5, 45]


// console.log("Q3 END =====================")


// // Question 4:
// // Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// // For example,
// // Input: LISTEN and SILENT
// // Output: True
// // Input: HELLO and JELLO
// // Output: False


// console.log("Q4 END =====================")


// // Question 5:
// // Write a JavaScript program to reverse a string without using inbuilt methods.
// // For example,
// // Input: Hello
// // Output: olleH


// console.log("Q5 END =====================")


<h2>Question 1</h2>
    <p id="demo"></p>
    <p id="demo1"></p>
    <p id="demo2"></p>
    <h2>Question 3</h2>
    <p id="demo6"></p>
    <p id="demo7"></p>
    <h2>Question 4</h2>
    <p id="demo3"></p>
    <p id="demo4"></p>
    <h2>Question 5</h2>
    <p id="demo5"></p>

    <script>
        var Numbers = ["1", "2", "3", "4", "5", "6",]
        let position = Numbers.indexOf("4");
        document.getElementById("demo").innerHTML = "Position Of 4 is =" + position;

        var Numbers = ["1", "2", "3", "4", "1", "6",]
        let position1 = Numbers.indexOf("1");
        let positio2 = Numbers.lastIndexOf("1");
        document.getElementById("demo1").innerHTML = "Position Of 1 is = " + position1 + "&" +positio2;

        var Numbers = ["1", "2", "3", "4", "5", "6",]
        let position3 = Numbers.indexOf("7");
        document.getElementById("demo2").innerHTML = "Position Of 4 is = " + position3;
    </script>
   
    <script>
        function checkStringsAnagram(a, b) {
   let len1 = a.length;
   let len2 = b.length;
   if(len1 !== len2){
      console.log('Invalid Input');
      return
   }
   let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   if(str1 === str2){
      document.getElementById("demo3").innerHTML =("True");
   } else { 
      document.getElementById("demo4").innerHTML =("False");
   }
}
checkStringsAnagram("LISTEN","SILENT")
    </script>

    <script>
        function ReverseString(str) {
  
  // Check input
  if(!str || str.length < 2 || 
          typeof str!== 'string') {
      return 'Not valid'; 
  }
    
  // Take empty array revArray
  const revArray = [];
  const length = str.length - 1;
    
  // Looping from the end
  for(let i = length; i >= 0; i--) {
      revArray.push(str[i]);
  }
    
  // Joining the array elements
  return revArray.join('');
}

document.getElementById("demo5").innerHTML=(ReverseString("HEllO"))


  
    </script>

<script>
    const points = [3, 2, 1, 4, 5, 45];
    document.getElementById("demo6").innerHTML = points;
    
    points.sort(function(a, b){return b - a});
    document.getElementById("demo7").innerHTML = points;
    </script>

<script>
    var i, j;
    for(i=1; i<=5; i++)
    {
     for(j=5; j>=i; j--)
      document.write(j);
     document.write("<br>");
    }
    </script>
