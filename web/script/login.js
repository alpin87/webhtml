function loginchk(){
    var id = get.ElementById("uesr_id");
    var pw = get.ElementById("passwd");

    if(id.value =="" || !(id.value.length >=3 && id.value.length <=12)){ 

        //경고창 출력
        alert("아이디를 똑바로 입력하세요");
        id.focus(); //id가 id인 태그에 커서깜빠거리는 포커스 주기
        return false; //현재 submit이벤트를 중지하는 개념(즉, 전송을 막는다->페이지안넘김)
        }
        
        if(pw.value==""){//입력받은 비밀번호값이 없으면
        alert("암호를 입력하세요");
        return false;
        }
        else{ //아이디와 비밀번호를 잘 입력받았다면
        
        document.FormLogin.onsubmit(); //form안에 있는 데이터를 action속성의 주소로 전송
        }
}