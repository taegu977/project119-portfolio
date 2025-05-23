function ckJfrm() {
		var frm = document.frmJoinMember;
		
		if(frm.project_id.value == "") {
			alert("프로젝트명을 입력해주세요.");
			frm.project_id.focus();
			return;
		}	
		
		if(frm.member_id.value == "") {
			alert("아이디를 입력해주세요.");
			frm.member_id.focus();
			return;
		}
			
		frm.submit();
		
	}