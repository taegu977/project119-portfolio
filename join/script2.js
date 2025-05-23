function ckfrm() {
		var frm = document.frmJoin;
		
		if(frm.member_id.value == "") {
			alert("아이디를 입력해주세요.");
			frm.member_id.focus();
			return;
		}
		
		if(frm.password.value == "") {
			alert("패스워드를 입력해주세요.");
			frm.password.focus();
			return;
		}
		
		if(frm.name.value == "") {
			alert("이름을 입력해주세요.");
			frm.name.focus();
			return;
		}
		
		if(frm.email.value == "") {
					alert("E-mail을 입력해주세요.");
					frm.email.focus();
					return;
				}
				
		if(frm.birthday.value == "") {
				alert("생년월일을 입력해주세요.");
				frm.birthday.focus();
				return;
			}
		
		if(frm.address.value == "") {
			alert("주소를 입력해주세요.");
			frm.address.focus();
			return;
		}
		
		if(frm.telno.value == "") {
			alert("전화번호를 입력해주세요.");
			frm.telno.focus();
			return;
				}		

		if(frm.gender.value == "") {
			alert("성별을 선택해주세요.");
			frm.gender.focus();
			return;
		}
			
		frm.submit();
		
	}
	
	function chkId() {
		let member_id=document.frmJoin.member_id.value;
		
		$.ajax(
			{
				type:"get",
				async:true,
				url:"/checkId",
				data:{"member_id":member_id},
				success:function(data, textStatus){
					$("#msg").html(`<p class="chk-box">${data}</p>`);
				},
				error:function(data, textStatus) {
					alert("데이터 전송 실패!");
				},
				complete:function(data, textStatus) {
				}
			}
		);
	}