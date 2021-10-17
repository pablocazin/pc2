const nickNameAnim = document.getElementById("nickname");
const nameAnim = document.getElementById("name");
        
  var typewriter = new Typewriter(nickNameAnim, {
    delay: 300,
    cursor: ''
  });
  typewriter
    .typeString('pablo')
    .pauseFor(2500)
    .deleteChars(1)
    .typeString('<span style="color: red;">o</span>')
    .start()



  var typewriter = new Typewriter(nameAnim, {
    delay: 300,
    cursor: ''
  });
  typewriter
    .pauseFor(1500)
    .typeString('cazin')
    .start()

